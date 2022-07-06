<template>
    <h1>Create an account</h1>  
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Register</button></p>
    <p><button @click="singInWithGoogle"> Sign in with Google</button></p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref('')
const password = ref('')

const register = async  () =>{
    const auth = getAuth()
    try{
     await createUserWithEmailAndPassword(auth, email.value, password.value)
        router.push('/feed')
        console.log(auth.currentUser)
    }catch (error){
          switch(error.code){
            case 'auth/email-already-in-use':
            alert('Email already in use')
            break;
            default:
            alert(error.code)
        
            
        }
    }

}

const singInWithGoogle = ()=>{

}
</script>