<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'
const div = ref<null | HTMLDivElement>(null)
const percentage = ref(0)
function handleScroll() {
  if (!div.value) return
  const divTop = div.value.offsetTop
  const divBottom = divTop + div.value.offsetHeight
  const screenHeight = window.innerHeight

  const startScroll = divTop
  const endScroll = divBottom - screenHeight

  const totalDistance = endScroll - startScroll

  const progress = (window.scrollY - startScroll) / totalDistance
  percentage.value = Math.min(Math.max(0, Math.round(progress * 100)), 100)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="backgroundScroll" ref="div">
    <div class="backgroundScroll__content">
      <p>{{ percentage }} %</p>
    </div>
  </div>
</template>

<style lang="scss">
.backgroundScroll {
  background: var(--color-text);
  min-height: 200vh;
  color: var(--color-background);
  &__content {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: rem(48);
  }
}
</style>
