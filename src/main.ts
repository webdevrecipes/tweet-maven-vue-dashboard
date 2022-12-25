import { createApp } from 'vue';
import router from '@/router/index';
import App from './App.vue';
import '@/assets/scss/global.scss';

createApp(App).use(router).mount('#app');
