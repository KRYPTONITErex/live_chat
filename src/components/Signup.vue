<template>

  <h2>Sign up form</h2>

  <form @submit.prevent="signup">

    <input type="text" placeholder="display name" v-model="displayName">
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>

    <button>Sign Up</button>

  </form>

</template>

<script>
import { ref } from 'vue';
// import { auth } from '../firebase/config';
import useSignup from '../composables/useSignup';


export default {

  setup(pros,context){

    let displayName = ref("")
    let email = ref("")
    let password = ref("")

    let {error,createAccount} = useSignup()

    let signup = async ()=>{
      // console.log(displayName.value,email.value,password.value)

      let res = await createAccount(email.value,password.value,displayName.value)

      if(res){
        // console.log(res.user)
        context.emit("enterChatroom");

      }

    }

    return { displayName,email,password,signup,error };

  }

}
</script>

<style>

</style>