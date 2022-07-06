<template>
    <h1>Sign in </h1>  
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p v-if="errMsg">{{errMsg}}</p>
    <p><button @click="logIn">Log in</button></p>
    <p><button @click="singInWithGoogle"> Sign in with Google</button></p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref('')
const password = ref('')
const errMsg = ref('')

const logIn = async () =>{
    const auth = getAuth()
    try{
     await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/feed');
    }catch (error){
        switch(error.code){
            case 'auth/invalid-email':
            errMsg.value = 'Vigane email';
            break;

            case 'auth/user-not-found':
            errMsg.value = 'Kasutajat ei leitud';
            break;

            case 'auth/wrong-password':
            errMsg.value = 'Vale parool';
            break;

            default:
            errMsg.value = 'Vale email või parool';
            break;
            
        }
    }

}

const singInWithGoogle = ()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider)
    .then((result)=> {
            console.log(result.user)
            router.push('/feed');
        })
    .catch((e)=>console.error(e))
}
</script>