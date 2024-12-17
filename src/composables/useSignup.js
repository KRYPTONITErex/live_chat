import { ref } from "vue";
import { auth } from '../firebase/config';


let error = ref(null);

let createAccount = async (email,password,displayName)=>{

    try{
        let res =await auth.createUserWithEmailAndPassword(email,password)
        // console.log(res.user)

        if(!res){
          throw new Error("could not create new USER")
        }
        res.user.updateProfile({displayName})
        // console.log(res.user)
        return res;

      }catch(err){
        // console.log(err.message);
        error.value = err.message;
        // console.log(error.value);
    }

}


let useSignup = ()=>{


    return {error, createAccount};
}

export default useSignup;