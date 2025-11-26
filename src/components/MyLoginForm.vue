<script setup lang="ts">
import { ref } from 'vue'
import MyInput from './MyInput.vue'
import MyButton from './MyButton.vue'

const email = ref('')
const password = ref('')

const pastLogin = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
}
</script>
<template>
  <form class="form" @submit.prevent="pastLogin">
    <MyInput type="email" label="Email : " v-model="email" />
    <MyInput type="password" label="Password : " v-model="password" />
    <MyButton>Se connecter</MyButton>
  </form>
</template>
