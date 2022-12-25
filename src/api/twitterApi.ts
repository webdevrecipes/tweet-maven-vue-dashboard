import api from './api';

const defaultParams = {
  baseURL: import.meta.env.VITE_TWITTER_API_BASE_URL,
};

const URLS = {
  login: '/login',
};

export const loginWithTwitter = () => {
  return api.get(URLS.login, { ...defaultParams });
};
