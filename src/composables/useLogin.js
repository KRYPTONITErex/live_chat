const { ref } = require("vue");
import { auth } from '../firebase/config';

let error = ref(null);

let signIn = async (email,password)=>{

  try{
    let res = await auth.signInWithEmailAndPassword(email,password);

    if(!res){
      throw new Error("could not login Account")
    }
    // console.log(res.user);
    return res;

  }catch(err){
      // Extract error message (handle stringified JSON)
    try {
      const parsedError = JSON.parse(err.message);
      error.value = parsedError.error.message || "An unknown error occurred.";
    } catch (e) {
      error.value = err.message; // Fallback if parsing fails
    }

    // error.value = err.message || "An unknown error occurred.";

    console.log(error.value);
  }

}


let useLogin = ()=>{

  return {error, signIn};
}

export default useLogin;