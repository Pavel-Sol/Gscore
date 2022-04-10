import { createAction } from '@reduxjs/toolkit';

export const getCodesAction = createAction('getCodes');

export const activateCodeAction = createAction('activateCode', (code: string) => {
  return {
    payload: {
      code,
    },
  };
});
