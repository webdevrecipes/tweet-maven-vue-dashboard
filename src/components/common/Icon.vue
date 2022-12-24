<template>
  <component class="icon" :is="icon" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icon = defineAsyncComponent(
  () => import(`../../assets/svg/${props.name}.svg`)
);
</script>

<style scoped lang="scss">
.icon {
  height: 24px;
  width: 24px;
  fill: $ebony-clay;
}
</style>
