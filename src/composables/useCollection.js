import { ref } from "vue";
import { db } from "../firebase/config";


let useCollection = (collection)=>{
    let error = ref(null);
    let addDoc = async (doc)=>{

        try{
            let res = await db.collection(collection).add(doc);
            console.log(res);
            return res;
        }catch(err){
            console.log(err.message);
            error.value = err.message;
        }
    }

    return {error, addDoc};
}

export default useCollection;