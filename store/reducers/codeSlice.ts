import { CodeType } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialCodeStateType = {
  codes: CodeType[];
};
const initialState: InitialCodeStateType = {
  codes: [],
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCodes(state, { payload }: PayloadAction<CodeType[]>) {
      state.codes = payload;
    },
  },
});

export const { setCodes } = codeSlice.actions;
export default codeSlice.reducer;
