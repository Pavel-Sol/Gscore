import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialUserStateType = {
  userToken: string;
  userName: string;
  activeStep: 1 | 2 | 3 | 4
};
const initialState: InitialUserStateType = {
  userToken: '',
  userName: '',
  activeStep: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveStep(state, { payload }: PayloadAction<1 | 2 | 3 | 4>) {
      state.activeStep = payload;
    },
    login(state, { payload }: PayloadAction<{ userToken: string }>) {
      state.userToken = payload.userToken;
    },
  },
});

export const { login, setActiveStep } = userSlice.actions;
export default userSlice.reducer;
