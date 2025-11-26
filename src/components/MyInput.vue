<script setup lang="ts">
defineProps<{
  type?: 'text' | 'password' | 'email'
  label?: string
  value?: string
}>()
</script>

<template>
  <div class="inputGroupe">
    <label class="input-label">{{ label }}</label>
    <input :type="type" :value="value" />
  </div>
</template>

<style lang="scss">
.inputGroupe {
  display: flex;
  gap: rem(20);
  align-items: center;
  background-color: aliceblue;

  & > .input-label {
    color: black;
  }
}
</style>
