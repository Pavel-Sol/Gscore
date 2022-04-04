import { createAction } from '@reduxjs/toolkit';
import { LoginRequestType, RegisterRequestType } from '../../types/types';

export const registerUserAction = createAction('registerUser', (user: RegisterRequestType) => {
  return {
    payload: {
      user,
    },
  };
});

export const loginUserAction = createAction('loginUser', (user: LoginRequestType) => {
  return {
    payload: {
      user,
    },
  };
});

export const authMeAction = createAction('authMe');
