<template>
  <h1>Create an account</h1>  
  <p>
    <input
      v-model="email"
      type="text"
      placeholder="Email"
    >
  </p>
  <p>
    <input
      v-model="password"
      type="password"
      placeholder="Password"
    >
  </p>
  <p>
    <button @click="register">
      Register
    </button>
  </p>
  <p>
    <button @click="singInWithGoogle">
      Sign in with Google
    </button>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, AuthError, Auth, AuthErrorMap } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref('')
const password = ref('')

const register = async  () =>{
    const auth: Auth = getAuth()
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