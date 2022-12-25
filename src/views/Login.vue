<template>
  <div>Login Screen</div>
  <button @click="login">Login</button>
</template>

<script setup lang="ts">
import { loginWithTwitter } from '@/api/twitterApi';

const login = async () => {
  const response = await loginWithTwitter();
  console.log(response);
};
</script>
