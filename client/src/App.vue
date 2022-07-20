<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router';
import { useTRPCClient, useTRPCQuery } from '../composables'
// const router = useRouter()


// const isLoggedIn = ref(false)

// let auth: Auth;
// onMounted(()=>{
  // auth = getAuth()
  // onAuthStateChanged(auth, (user)=>{
  //   if(user){
  //     isLoggedIn.value = true;
  //   } else {
  //     isLoggedIn.value = false;
  //   }
  // })
// })
// const handleSignOut = () => {
//   signOut(auth).then(()=> {
//     router.push('/')
//   })
// }

// import your router, e.g.:
import type { AppRouter } from '../../server/api/tRPC'

const { client } = useTRPCClient<AppRouter>({
  url: 'http://localhost:8080/trpc'
})
const data = ref({})
onMounted( ()=>{
  data.value = useTRPCQuery(client, ['transactions.list']);
})
const click = () =>{
  data.value = useTRPCQuery(client, ['transactions.list']);
}
</script>
<template>
  {{data}}
  <nav>
    <button @click="click">test</button>
    <div class="text-3xl font-bold underline px-1">
      Hello World!
    </div>
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/feed">
      Feed
    </router-link>
    <router-link to="/register">
      Register
    </router-link>
<!--    <router-link-->
<!--      v-if="!isLoggedIn"-->
<!--      to="/sign-in"-->
<!--    >-->
<!--      Login-->
<!--    </router-link>-->
<!--    <button-->
<!--      v-if="isLoggedIn"-->
<!--      @click="handleSignOut"-->
<!--    >-->
<!--      Sign out-->
<!--    </button>-->
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a { padding: 1rem; }
</style>
