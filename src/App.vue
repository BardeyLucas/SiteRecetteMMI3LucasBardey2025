<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MyButton from './components/MyButton.vue'
</script>

<template>
  <DefaultLayout>
    <nav class="header--nav">
      <RouterLink to="/"><MyButton variant="outline">Home</MyButton></RouterLink>
      <RouterLink to="/about"><MyButton variant="outline">About</MyButton></RouterLink>
      <RouterLink to="/button"><MyButton variant="outline">Button</MyButton></RouterLink>
    </nav>
    <RouterView />
  </DefaultLayout>
</template>
