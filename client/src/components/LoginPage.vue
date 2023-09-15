<script setup>
import { ref } from 'vue'
const header = ref('Login Page')
const login = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('logged in!')
}
</script>

<template>
  <form class="container" @:submit.prevent="handleLogin">
    <h1>{{ header }}</h1>
    <input v-model.trim="login" class="login" type="text" placeholder="Login">
    <input v-model="password" class="password" type="password" placeholder="Password">
    <button @:click="handleLogin">Login</button>
    {{login}}
  </form>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>