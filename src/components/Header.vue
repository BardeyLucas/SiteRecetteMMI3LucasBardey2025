<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Login from '@/assets/IconLogin.vue'
import User from '@/assets/IconUser.vue'
import ArrowDown from '@/assets/IconArrowDown.vue'
import IconSearch from '@/assets/IconSearch.vue'
import IconShoppingCart from '@/assets/IconShoppingCart.vue'
</script>
<template>
  <header class="header">
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
          <input class="header__inputSearch" id="SearchBar" type="text" placeholder="Search" />
          <button class="header__buttonShearch">
            <IconSearch class="header__IconButtonShearch" />
          </button>
        </div>
      </section>
      <section class="header__bottomRight">
        <button class="header__panier">
          <div class="header__IconShoppingCart_PositionPatcher">
            <IconShoppingCart class="header__IconShoppingCart" />
          </div>
          <div class="header__panier-notification">
            <p class="header__notification-number">1</p>
          </div>
        </button>
        <button class="header__profile">
          <img />
        </button>
      </section>
    </section>
  </header>
</template>
