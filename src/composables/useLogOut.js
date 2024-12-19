import { ref } from "vue";
import { auth } from "../firebase/config";


let error = ref(null);

let Logout = async ()=>{
    try{
        // console.log("logout")
       await auth.signOut();
       console.log("USER LOG OUTED OUT");
   }catch(err){
       error.value = err.message;
       console.log(error.value);
   }
}


let useLogOut = ()=>{

    return {error, Logout};
}

export default useLogOut;