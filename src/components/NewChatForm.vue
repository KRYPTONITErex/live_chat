<template>
    <form >
        <textarea v-model="message" 
        placeholder="text message and hit ENTER to send -->"
        @keypress.enter="handleSubmit">
    </textarea>
    </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';
import useCollection from '../composables/useCollection';

export default {

    setup(){
        let message = ref("");
        let {user} = getUser();
        let {error,addDoc} = useCollection("messages");
        let handleSubmit = async () => {
            // alert('HI there, u enter handleSubmit')
            let chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp(),
                uid: user.value.uid
            }
            await addDoc(chat);
            message.value = "";
        }

        return { message,handleSubmit }  
    }

}
</script>

<style >
.parent-container {
    overflow: visible;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px auto 20px;
    width: 90%;
    max-width: 1000px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px 0px 10px 0px;
    padding: 5px;
    box-shadow: 0 2px 3px rgba(37, 145, 139, 0.231);
}

textarea {
    width: 100%;
    max-width: 100%;
    height: 80px;
    border: 1px solid #e3eff2a6;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    resize: none;
    background-color: #ebfffcb6;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

textarea:focus {
    outline: none;
    border-color: #ff3700aa;
}

textarea::placeholder {
    color: #ff40008a;
    font-size: 14px;
}

form:focus-within {
    box-shadow: 2px 8px 10px rgba(63, 81, 181, 0.2);
}
</style>