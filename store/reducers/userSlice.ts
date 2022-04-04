import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialUserStateType = {
  isAuth: boolean;
  userName: string;
  activeStep: 1 | 2 | 3 | 4;
};
const initialState: InitialUserStateType = {
  isAuth: false,
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
    login(state, { payload }: PayloadAction<{ userName: string }>) {
      state.isAuth = true;
      state.userName = payload.userName;
    },
    reset(state) {
      state.activeStep = 1;
      state.isAuth = false;
      state.userName = '';
    },
  },
});

export const { login, setActiveStep, reset } = userSlice.actions;
export default userSlice.reducer;
