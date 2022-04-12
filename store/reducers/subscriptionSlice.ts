import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubscriptionType } from 'types';

type InitialSubscriptionStateType = {
   subscriptions: SubscriptionType[]
};
const initialState: InitialSubscriptionStateType = {
   subscriptions: []
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSubscriptions(state, { payload }: PayloadAction<SubscriptionType[]>) {
      state.subscriptions = payload
    },
  },
});

export const {setSubscriptions} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
