<script setup>
import { RouterView, RouterLink } from 'vue-router';
import useMember from './stores/useMember';

const {member, logout} = useMember()



</script>

<template>
  <div>
    <span> <RouterLink to="/">Main</RouterLink>  </span>
    <span> <RouterLink to="/about">About</RouterLink>  </span>
    <span> <RouterLink to="/todo">Todo</RouterLink>  </span>
    
    <span v-if="member.mid === null"> <RouterLink to="/login">Login</RouterLink> </span>

    <span v-if="member.mid  !== null"> <button @click="logout" >Logout</button> </span>

    <span v-if="member.mid  !== null">
      <RouterLink to="/kiosk">Kiosk</RouterLink> 
    </span>

  </div>

  <div >
     
    <hr/>
      MemberID : {{ member.value?.mid  }}   
    <hr/>
  </div>

  <RouterView></RouterView>
  
</template>

<style scoped>

span {margin-left: 1em;}


</style>