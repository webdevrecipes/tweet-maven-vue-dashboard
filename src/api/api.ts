import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create();

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config: AxiosRequestConfig<any> | undefined) =>
      axios.get(url, config),
    post: (
      url: string,
      body: any,
      config: AxiosRequestConfig<any> | undefined
    ) => axios.post(url, body, config),
    patch: (
      url: string,
      body: any,
      config: AxiosRequestConfig<any> | undefined
    ) => axios.patch(url, body, config),
    delete: (url: string, config: AxiosRequestConfig<any> | undefined) =>
      axios.delete(url, config),
  };
};

export default api(axiosInstance);
