<template>

    <form class="flex flex-col items-center max-w-md mx-auto sm:max-w-lg lg:mx-0" @submit.prevent="handleSubmit">
   
        <input class="rounded-xl mb-4" type="email" required placeholder="Email" v-model="email" />
        <input class="rounded-xl mb-4" type="password" required placeholder="Password" v-model="password" />
        <div class="error text-red-600"> Error: {{error}}</div>
        <button class="rounded-xl mb-4">Log in</button>
    </form>
</template>

<script setup>
import {ref} from 'vue'
import useLogin from '@/composables/useLogin';

const {error, login} = useLogin();

const email = ref("");
const password = ref("");


const emit = defineEmits(['loggedIn']);
const handleSubmit = async () =>{
   await login( email.value, password.value);
   if(!error.value){
       console.log("user logged in");
        emit('loggedIn') 
   }
}


</script>

<style lang="scss" scoped>
</style>