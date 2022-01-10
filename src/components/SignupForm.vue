<template>
    <form
        class="flex flex-col items-center max-w-md mx-auto sm:max-w-lg lg:mx-0"
        @submit.prevent="handleSubmit"
    >
        <input type="text" required placeholder="Display name" v-model="displayName" />
        <input type="email" required placeholder="Email" v-model="email" />
        <input type="password" required placeholder="Password" v-model="password" />
        <div class="error text-red-600">Error: {{ error }}</div>
        <button>Sign up</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import useSignup from '@/composables/useSignup';

const { error, signup } = useSignup();
const emit = defineEmits(['signedUp']);

const displayName = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = async () => {
    await signup(email.value, password.value, displayName.value);
    console.log("user signed up");
    if (!error.value) {
        emit('signedUp')
    }
}


</script>

<style lang="scss" scoped>
</style>