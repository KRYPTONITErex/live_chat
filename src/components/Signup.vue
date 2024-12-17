<template>

  <h2>Sign up form</h2>

  <form @submit.prevent="signup">

    <input type="text" placeholder="display name" v-model="displayName">
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="password" v-model="password">
    <button>Sign Up</button>

  </form>

</template>

<!-- <script>
import { ref } from 'vue';
// import { auth } from '../firebase/config';
import { auth } from './firebase/config';
import { auth } from './firebase/Config';

export default {

    setup(){

        let displayName = ref("")
        let email = ref("")
        let password = ref("")

        let signup = ()=>{
            auth
          // console.log(displayName.value,email.value,password.value) 


        }
      return { displayName,email,password,signup };

}

}
</script> -->


<script>
import { ref } from "vue";
// import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    // let signup = async () => {
    //   try {
    //     // Replace auth.c with createUserWithEmailAndPassword for Firebase v9
    //     const userCredential = await auth.createUserWithEmailAndPassword(
    //       email.value,
    //       password.value
    //     );
    //     // Update user profile to include display name
    //     await userCredential.user.updateProfile({
    //       displayName: displayName.value,
    //     });
    //     console.log("User signed up:", userCredential.user);
    //   } catch (error) {
    //     console.error("Error signing up:", error.message);
    //   }
    // };

    let signup = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    await userCredential.user.updateProfile({
      displayName: displayName.value,
    });
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

    return { displayName, email, password, signup };
  },
};
</script>

<style>

</style>