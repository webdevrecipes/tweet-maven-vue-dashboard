<template>
  <div>
    <div>Login Screen</div>
    <base-button @click="login">Primary</base-button>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import { loginWithTwitter } from '@/api/twitterApi';

const login = async () => {
  try {
    const response = await loginWithTwitter();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
</script>
