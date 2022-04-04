import { RegisterRequestType, LoginRequestType } from './../../../types/types';
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
};
