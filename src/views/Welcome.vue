
<script setup>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const isSignedUp = ref(true);

const switchLogin = () => {
    isSignedUp.value = !isSignedUp.value
}

const router = useRouter();
const enterChat = () => {
    router.push({ name: 'Chatroom' })
}


</script>

<template>
    <div class="text-center mx-auto w-100 prose prose-stone prose-xl">
        <p>Welcome</p>

        <div v-if="isSignedUp">
            <h2>Log in</h2>
            <LoginForm @loggedIn="enterChagitt" />
            <p>
                Don't have an account?
                <span class="cursor-pointer" @click="switchLogin">Sign up!</span>
            </p>
        </div>
        <div v-else>
            <h2>Sign up</h2>
            <SignupForm @signedUp="enterChat" />
            <p>
                Already have an account?
                <span class="cursor-pointer" @click="switchLogin">Log in</span>.
            </p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
</style>  