import { ref } from "vue";
import { auth } from "../firebase/config";


let error = ref(null);

let createLogout = async ()=>{
    try{
        // console.log("logout")
       await auth.signOut();
       console.log("user Logged out");
   }catch(err){
       error.value = err.message;
       console.log(error.value);
   }
}


let useLogOut = ()=>{

    return {error, createLogout};
}

export default useLogOut;