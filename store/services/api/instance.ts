import axios, { AxiosError } from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://gscore-back.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
