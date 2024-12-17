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


export default {

    setup(){

        let displayName = ref("")
        let email = ref("")
        let password = ref("")

        let signup = ()=>{
          console.log(displayName.value,email.value,password.value) 


        }
      return { displayName,email,password,signup };

}

}
</script>

<style>

</style>