import {
  RegisterRequestType,
  LoginRequestType,
  PersonalInfoRequestType,
  ChangePassRequestType,
} from './../../../types/types';
import { authInstance, commonInstance } from './instance';

export const API = {
  registerUser: (user: RegisterRequestType) => {
    return authInstance.post('api/users/sign-up', user);
  },
  loginUser: (user: LoginRequestType) => {
    return authInstance.post('api/users/sign-in', user);
  },
  authMe: () => {
    return commonInstance.get('api/users/me');
  },

  getProducts: () => {
    return commonInstance.get('api/products');
  },

  buyProduct: (priceId: number) => {
    return commonInstance.post('api/payments/buy', { priceId });
  },

  getSubscriptions: () => {
    return commonInstance.get('api/subscribe/self');
  },
  changePersonalInfo: (data: PersonalInfoRequestType) => {
    return commonInstance.patch('api/users', data);
  },

  changePassword: (data: ChangePassRequestType) => {
    return commonInstance.patch('api/users/update-password', data);
  },

  getCodes: () => {
    return commonInstance.get('api/code/self');
  },
};
