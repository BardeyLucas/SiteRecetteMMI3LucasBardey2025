<script setup lang="ts">
defineProps<{
  href?: string
  variant?: 'default' | 'outline' | 'clear'
  size?: 'default' | 'tiny' | 'small' | 'medium' | 'large' | 'giant'
  state?: 'default' | 'disabled'
  content?: 'default' | 'PlusText' | 'IconOnly'
}>()
</script>

<!-- <template>
  <a
    v-if="href"
    href=""
    class="button"
    :class="{ '-outline': variant === 'outline', '-small': size === 'small' }"
    ><slot></slot></a>
  <button
    v-else
    class="button"
    :class="{ '-outline': variant === 'outline', '-small': size === 'small' }"
  >
    <slot></slot>
  </button>
</template> -->

<template>
  <button
    v-if="content !== 'IconOnly'"
    class="button"
    :class="{
      'button--outline': variant === 'outline',
      'button--clear': variant === 'clear',
      'button--tiny': size === 'tiny',
      'button--small': size === 'small',
      'button--medium': size === 'medium' || size === 'default' || size === undefined,
      'button--large': size === 'large',
      'button--giant': size === 'giant',
      'button--disabled': state === 'disabled',
    }"
  >
    <div class="arrow-left"></div>
    <slot></slot>
    <div class="arrow-right"></div>
  </button>
  <button
    v-if="content === 'IconOnly'"
    class="button"
    :class="{
      'button--outline': variant === 'outline',
      'button--clear': variant === 'clear',
      'button--tiny': size === 'tiny',
      'button--small': size === 'small',
      'button--medium': size === 'medium' || size === 'default' || size === undefined,
      'button--large': size === 'large',
      'button--giant': size === 'giant',
      'button--disabled': state === 'disabled',
      'button--IconOnly': content === 'IconOnly',
    }"
  >
    <div class="arrow-top"></div>
  </button>
</template>

<style lang="scss">
.button {
  color: $button--color__default;
  font-weight: bold;
  border: none;
  background-color: $button--background__default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $button--rounded__default;
  cursor: pointer;
  outline: $button--outline__default;

  &:hover {
    background-color: $button--background__default_hover;
    outline: $button--outline__default;
  }

  &:focus {
    background-color: $button--background__default_focus;
    outline: $button--outline__default_focus;
  }

  &:active {
    background-color: $button--background__default_active;
    outline: $button--outline__default;
  }

  & p {
    margin: 0 rem(8);
  }

  &.button--disabled {
    background-color: $button--background__default_disabled;
    color: $button--color__disabled;
    cursor: not-allowed;
    outline: $button--outline__default;
  }

  &.button--outline {
    color: $button--color__outline;
    outline: $button--outline__outline;
    outline-offset: $button--outlineOffset__outline;
    background-color: $button--background__outline;

    &:hover {
      background-color: $button--background__outline_hover;
      box-shadow: $button--boxShadow__outline;
    }

    &:focus {
      background-color: $button--background__outline_focus;
      box-shadow: $button--boxShadow__outline_focus;
    }

    &:active {
      background-color: $button--background__outline_active;
      box-shadow: $button--boxShadow__outline;
    }

    &.button--disabled {
      background-color: white;
      outline: $button--outline__outline_disabled;
      color: $button--color__disabled;
      box-shadow: $button--boxShadow__outline;
    }
  }
  &.button--clear {
    color: $button--color__clear;
    background-color: $button--background__clear;
    box-shadow: $button--boxShadow__clear;

    &:hover {
      background-color: $button--background__clear_hover;
      box-shadow: $button--boxShadow__clear;
    }

    &:focus {
      background-color: $button--background__clear_focus;
      box-shadow: $button--boxShadow__clear_focus;
    }

    &:active {
      background-color: $button--background__clear_active;
      box-shadow: $button--boxShadow__clear;
    }

    &.button--disabled {
      background-color: $button--background__clear_disabled;
      color: $button--color__disabled;
      box-shadow: $button--boxShadow__clear;
    }
  }
}

.button--giant {
  font-size: $button--size__giant;
  padding: $button--padding__giant;
  height: $button--height__giant;
  border-radius: $button--borderRadius__default;

  &.button--IconOnly {
    padding: $button--padding__giantIconOnly;
  }
}

.button--large {
  font-size: $button--size__large;
  padding: $button--padding__large;
  height: $button--height__large;
  border-radius: $button--borderRadius__default;
  &.button--IconOnly {
    padding: $button--padding__largeIconOnly;
  }
}

.button--medium {
  font-size: $button--size__medium;
  padding: $button--padding__medium;
  height: $button--height__medium;
  border-radius: $button--borderRadius__default;
  &.button--IconOnly {
    padding: $button--padding__mediumIconOnly;
  }
}

.button--small {
  font-size: $button--size__small;
  padding: $button--padding__small;
  height: $button--height__small;
  border-radius: $button--borderRadius__small;
  &.button--IconOnly {
    padding: $button--padding__smallIconOnly;
  }
}

.button--tiny {
  font-size: $button--size__tiny;
  padding: $button--padding__tiny;
  height: $button--height__tiny;
  border-radius: $button--borderRadius__tiny;
  &.button--IconOnly {
    padding: $button--padding__tinyIconOnly;
  }
}
.button > .arrow-left {
  background-image: $button--arrow__default !important;
  background-size: cover;
  transform: scaleX(-1);
  width: rem(24);
  height: rem(24);
}

.button > .arrow-right {
  background-image: $button--arrow__default !important;
  background-size: cover;
  width: $button--arrowWidth__default;
  height: $button--arrowHeight__default;
}

.button > .arrow-top {
  background-image: $button--arrow__default !important;
  background-size: cover;
  transform: rotate(-90deg);
  width: rem(24);
  height: rem(24);
}

.button--tiny > .arrow-left,
.button--tiny > .arrow-right,
.button--tiny > .arrow-top {
  width: $button--arrowWidth__tiny;
  height: $button--arrowHeight__tiny;
}

.button--outline > .arrow-left,
.button--outline > .arrow-right,
.button--clear > .arrow-left,
.button--clear > .arrow-right,
.button--outline > .arrow-top,
.button--clear > .arrow-top {
  background-image: $button--arrow__outline !important;
}

.button--disabled > .arrow-left,
.button--disabled > .arrow-right,
.button--disabled > .arrow-top {
  background-image: $button--arrow__disabled !important;
}
</style>
