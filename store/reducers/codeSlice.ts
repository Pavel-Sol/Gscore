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
    activateCode(state, { payload }: PayloadAction<CodeType>) {
      state.codes = state.codes.map((el) => {
        if (el.id === payload.id) {
          return payload;
        } else {
          return el;
        }
      });
    },
  },
});

export const { setCodes, activateCode } = codeSlice.actions;
export default codeSlice.reducer;
