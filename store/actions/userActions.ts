import { createAction } from '@reduxjs/toolkit';
import { RegisterUserType } from '../../types/types';

export const registerUserAction = createAction('registerUser', (user: RegisterUserType) => {
  return {
    payload: {
      user,
    },
  };
});
