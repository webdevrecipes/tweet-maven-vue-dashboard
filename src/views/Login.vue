<template>
  <div class="login-page-container">
    <div class="heading">
      <h1 class="title">TweetMaven</h1>
      <h3 class="subtitle">The Complete Twitter Management Tool</h3>
      <span class="description"
        >Get started completely free with our generous free tier and only
        upgrade if you need to.</span
      >
    </div>

    <ul class="feature-list">
      <li v-for="feature in featureList" class="feature-list-item">
        <base-icon class="check-mark" name="icon-check" />
        {{ feature }}
      </li>
    </ul>

    <base-button @click="login" class="login-button"
      >Login With Twitter</base-button
    >

    <ul class="landing-page-links">
      <li v-for="link in landingPageLinks" class="landing-page-link">
        <a :href="link.linkSource" target="_blank">{{ link.linkText }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { loginWithTwitter } from '@/api/twitterApi';

const featureList = [
  'Post and Schedule Tweets',
  'Draft and Save Tweets for Later',
  'Explore and Analyze Trends',
];

const landingPageLinks = [
  {
    linkText: 'Home',
    linkSource: 'https://tweetmaven.com',
  },
  {
    linkText: 'Pricing',
    linkSource: 'https://tweetmaven.com/pricing',
  },
  {
    linkText: 'FAQ',
    linkSource: 'https://tweetmaven.com/faq',
  },
  {
    linkText: 'Contact',
    linkSource: 'https://tweetmaven.com/contact',
  },
  {
    linkText: 'Privacy Policy',
    linkSource: 'https://tweetmaven.com/privacy',
  },
  {
    linkText: 'Terms of Service',
    linkSource: 'https://tweetmaven.com/terms',
  },
];

const login = async () => {
  try {
    const response = await loginWithTwitter();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
</script>

<style scoped lang="scss">
.login-page-container {
  height: 100vh;
  position: relative;
  z-index: 0;
  background-color: $catskill-white;
  text-align: center;

  .heading {
    padding: 50px 0px 35px;

    .title {
      font-size: 3rem;
      font-weight: $extra-bold-weight;
    }

    .subtitle {
      font-weight: $bold-weight;
      font-size: 1rem;
      font-style: italic;
      margin-bottom: 5px;
    }

    .description {
      font-size: 0.75rem;
      font-weight: $light-weight;
      color: $shuttle-gray;
    }
  }

  .feature-list {
    list-style-type: none;

    .feature-list-item {
      display: flex;
      justify-content: center;
      font-weight: $extra-bold-weight;
      font-size: 1.25rem;
      margin-bottom: 16px;

      .check-mark {
        margin-right: 10px;
        fill: $venice-blue-light;
      }
    }
  }

  .login-button {
    position: relative;
    margin: 20px 20px 75px;
    background-color: $venice-blue-light;
    border: 2px solid $ebony-clay;
    border-radius: 8px;
    color: $catskill-white;
    font-weight: $bold-weight;
    text-transform: uppercase;
    height: 48px;
    line-height: 24px;
    padding: 0 25px;
    text-align: center;
    text-decoration: none;
    touch-action: manipulation;

    &::after {
      background-color: $ebony-clay;
      border-radius: 8px;
      content: '';
      display: block;
      height: 48px;
      left: 0;
      width: 100%;
      position: absolute;
      top: -2px;
      transform: translate(8px, 8px);
      transition: transform 0.2s ease-out;
      z-index: -1;
    }

    &:hover {
      background-color: $venice-blue-dark;

      &::after {
        transform: translate(0, 0);
      }
    }
  }

  .landing-page-links {
    display: flex;
    justify-content: center;
    list-style-type: none;

    .landing-page-link {
      margin: 0 5px;

      a {
        font-size: 0.85rem;
        font-weight: $light-weight;
        color: $slate-gray;
        text-decoration: none;
      }
    }
  }
}
</style>
