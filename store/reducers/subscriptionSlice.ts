import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TariffType } from '../../types/types';

type InitialSubscriptionStateType = {
  tariff: TariffType | null;
};
const initialState: InitialSubscriptionStateType = {
  tariff: null,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setTariff(state, { payload }: PayloadAction<TariffType>) {
      state.tariff = payload;
    },
  },
});

export const { setTariff } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
