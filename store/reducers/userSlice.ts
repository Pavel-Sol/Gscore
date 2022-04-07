import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialUserStateType = {
  isAuth: boolean;
  userName: string;
  userEmail: string;
  activeStep: 1 | 2 | 3 | 4;
  userLoading: boolean;
  userError: string | null;
};
const initialState: InitialUserStateType = {
  isAuth: false,
  userName: '',
  userEmail: '',
  activeStep: 1,
  userLoading: false,
  userError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveStep(state, { payload }: PayloadAction<1 | 2 | 3 | 4>) {
      state.activeStep = payload;
    },
    login(state, { payload }: PayloadAction<{ userName: string; userEmail: string }>) {
      state.isAuth = true;
      state.userName = payload.userName;
      state.userEmail = payload.userEmail;
    },
    reset(state) {
      state.activeStep = 1;
      state.isAuth = false;
      state.userName = '';
      state.userEmail = '';
      state.userLoading = false;
      state.userError = null;
    },
    setUserLoading(state, { payload }: PayloadAction<boolean>) {
      state.userLoading = payload;
    },

    setUserError(state, { payload }: PayloadAction<null | string>) {
      state.userError = payload;
    },
  },
});

export const { login, setActiveStep, reset, setUserLoading, setUserError } = userSlice.actions;
export default userSlice.reducer;
