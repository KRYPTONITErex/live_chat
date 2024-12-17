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
import { auth } from '../firebase/config';


export default {

  setup(){

    let displayName = ref("")
    let email = ref("")
    let password = ref("")

    let error = ref(null);
    let signup = async ()=>{
      // console.log(displayName.value,email.value,password.value)

      try{
        let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
        // console.log(res.user)

        if(!res){
          throw new Error("could not create new USER")
        }
        console.log(res.user)

      }catch(err){
        // console.log(err.message);
        error.value = err.message;
        console.log(error.value);
      }

    }

    return { displayName,email,password,signup };

  }

}
</script>

<style>

</style>