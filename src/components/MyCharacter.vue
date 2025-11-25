<script setup lang="ts">
defineProps<{
  prenom: string
  nom: string
  description: string
  img: string
}>()
</script>
<template>
  <div class="character">
    <img :src="`/images/${img}`" />
    <MyTitle as="h3">{{ prenom }} {{ nom }}</MyTitle>
    <p>{{ description }}</p>
  </div>
</template>
<style lang="scss">
.character {
  max-width: rem(300);
  padding: rem(16);
}
</style>
