<script setup lang="ts">
import MyButton from './MyButton.vue'
import { ref } from 'vue'
const email = ref('')
const password = ref('')

const onSubmit = () => {
  // POST SUR L'API
  console.log('Submit form')
  console.log(email.value, password.value)
}
</script>
<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="email" />

    <input type="password" v-model="password" />

    <MyButton>Submit</MyButton>
  </form>
</template>
