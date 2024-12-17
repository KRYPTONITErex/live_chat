<template>

  <h2>Sign up form</h2>

  <form @submit.prevent="signup">

    <input type="text" placeholder="display name" v-model="displayName">
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="password" v-model="password">
    <button>Sign Up</button>

  </form>

</template>

<script>
import { ref } from 'vue';
// import { auth } from '../firebase/config';
import useSignup from '../composables/useSignup';


export default {

  setup(){

    let displayName = ref("")
    let email = ref("")
    let password = ref("")

    let {error,createAccount} = useSignup()

    let signup = async ()=>{
      // console.log(displayName.value,email.value,password.value)

        let res = await createAccount(email.value,password.value,displayName.value)
        console.log(res.user)
    }

    return { displayName,email,password,signup };

  }

}
</script>

<style>

</style>