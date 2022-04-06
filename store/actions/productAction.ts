import { createAction } from '@reduxjs/toolkit';

export const getProductsAction = createAction('getProducts');

export const buyProductAction = createAction('buyProduct', (priceId: number) => {
  return {
    payload: {
      priceId,
    },
  };
});
