<template>

    <h2>Login form</h2>
  
    <form @submit.prevent="login">
  
      <input type="text" placeholder="email" v-model="email">
      <input type="text" placeholder="password" v-model="password">
      <button>Login</button>
  
    </form>
  
  </template>
  
  <!-- <script>
  import { ref } from 'vue';
  
  export default {
  
      setup(){
  
          let email = ref("")
          let password = ref("")
  
          let login = ()=>{
            //   console.log( email.value, password.value)

          }
  
          return { email,password, login };
  
      }
  
  }
  </script> -->


  <script>
import { ref } from "vue";
// import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default {
  setup() {
    let email = ref("");
    let password = ref("");

    // let login = async () => {
    //   try {
    //     // Sign in using Firebase v9
    //     const userCredential = await auth.signInWithEmailAndPassword(
    //       email.value,
    //       password.value
    //     );
    //     console.log("User logged in:", userCredential.user);
    //   } catch (error) {
    //     console.error("Error logging in:", error.message);
    //   }
    // };

    let login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

    return { email, password, login };
  },
};
</script>
  
  <style>
  
  </style>