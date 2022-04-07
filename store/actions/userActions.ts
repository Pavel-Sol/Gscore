import { createAction } from '@reduxjs/toolkit';
import {
  LoginRequestType,
  RegisterRequestType,
  PersonalInfoRequestType,
  ChangePassRequestType,
} from '../../types/types';

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

export const personalInfoAction = createAction('personalInfo', (data: PersonalInfoRequestType) => {
  return {
    payload: {
      data,
    },
  };
});

export const changePassAction = createAction('changePass', (data: ChangePassRequestType) => {
  return {
    payload: {
      data,
    },
  };
});
