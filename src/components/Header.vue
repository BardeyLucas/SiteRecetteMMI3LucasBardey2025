<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Login from '@/assets/login.vue'
import User from '@/assets/user.vue'
import ArrowDown from '@/assets/arrow-down.vue'
import valor from '@/views/ButtonView.vue'
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
    <section class="header__bottom">
      <section class="header__bottomLeft">
        <img class="header__logo" src="/images/MainLogo.png" alt="Logo" />
        <div class="header__search">
          <button class="header__shearch-categories">
            <p>All Categories</p>
            <ArrowDown class="header__ArrowDownIcon" />
          </button>
          <input class="header__inputSearch" type="text" placeholder="Search" />
          <button class="header__buttonShearch">Search</button>
        </div>
      </section>
      <section class="header__bottomRight">
        <button class="header__panier">
          ---
          <div>
            <p>5</p>
          </div>
        </button>
        <button class="header__profile">
          <img />
        </button>
      </section>
    </section>
  </header>
</template>
