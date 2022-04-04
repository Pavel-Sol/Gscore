import { RegisterUserType } from './../../../types/types';
import { authInstance } from './instance';

export const API = {
  registerUser: (user: RegisterUserType) => {
    return authInstance.post('api/users/sign-up', user);
  },
};
