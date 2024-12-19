<template>
  <nav v-if="user">
    <div>
        <p>HI {{ user.displayName }}</p>
        <p class="email"> Logged in as {{ user.email }} </p>
    </div>
    <button @click="Logout">LogOut</button>

  </nav>
</template>

<script>

import { ref } from 'vue';
import useLogOut from '../composables/useLogOut';
import getUser from '../composables/getUser';

export default {
    setup(){
        let error = ref(null);

        let { Logout } = useLogOut();
        let { user } = getUser();

       
        return { Logout,user }
    }

}
</script>


<style>

    nav{
        padding: 20px;
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