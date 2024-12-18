<template>
  <nav>
    <div>
        <p>HI display name</p>
        <p class="email"> Logged in as email </p>
    </div>
    <button @click="logout">LogOut</button>

  </nav>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase/config';
import useLogOut from '../composables/useLogOut';

export default {
    setup(){
        let error = ref(null);
        let logout = async ()=>{
            let res = await useLogOut();
            if(res){
              console.log("user logged out");
            }
        }

        return {logout}
    }

}
</script>




<style>

    nav{
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav p{
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 14px;
        color: #999;
    }   

</style>