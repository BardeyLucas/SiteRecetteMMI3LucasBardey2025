<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Login from '@/assets/assets/login.vue'
import User from '@/assets/assets/user.vue'
</script>
<template>
  <header>
    <nav class="header__top">
      <section class="header__TopLeft">
        <p>Community</p>
        <p>Books</p>
        <p>Recipe index</p>
        <p>Popular</p>
      </section>
      <section class="header__TopRight">
        <button>
          <Login class="LoginIcon" />
          Register
        </button>
        <button>
          <User class="UserIcon" />
          Login
        </button>
      </section>
    </nav>
  </header>
</template>
