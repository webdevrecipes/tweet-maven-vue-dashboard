<template>
  <button :class="[type, 'base-button']">
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
});
</script>

<style scoped lang="scss">
.base-button {
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  padding: 10px 16px;
  text-align: center;
  transition: background-color 0.5s ease;
  font-size: 1rem;
}

.primary {
  background-color: $venice-blue-light;
  color: $catskill-white;

  &:hover {
    background-color: $venice-blue-dark;
  }
}

.secondary {
  background-color: $french-pass;
  color: $venice-blue-dark;

  &:hover {
    background-color: $anakiwa;
  }
}

.tertiary {
  background-color: transparent;
  color: $venice-blue-dark;
  font-weight: $bold-weight;

  &:hover {
    color: $venice-blue-light;
  }
}
</style>
