import { createAction } from '@reduxjs/toolkit';
import { SaveCodesRequestType } from 'types';

export const getCodesAction = createAction('getCodes');

export const activateCodeAction = createAction('activateCode', (code: string) => {
  return {
    payload: {
      code,
    },
  };
});

export const saveCodesAction = createAction('saveCodes', (data: SaveCodesRequestType) => {
  return {
    payload: {
      data,
    },
  };
});
