import axios, { AxiosError } from 'axios';
import { LS } from '../LS';

export const commonInstance = axios.create({
  baseURL: 'https://gscore-back.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

commonInstance.interceptors.request.use((config) => {
  const token = LS.getToken();

  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${token}`;

  return config;
}),
  (error: AxiosError) => {
    return Promise.reject(error);
  };

export const authInstance = axios.create({
  baseURL: 'https://gscore-back.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
