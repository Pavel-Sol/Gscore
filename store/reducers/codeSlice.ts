import { CodeType } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialCodeStateType = {
  codes: CodeType[];
  error: string | null
};
const initialState: InitialCodeStateType = {
  codes: [],
  error: null
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCodes(state, { payload }: PayloadAction<CodeType[]>) {
      state.codes = payload;
    },
    setError(state, { payload }: PayloadAction<string | null>) {
      state.error = payload;
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

export const { setCodes, activateCode, setError } = codeSlice.actions;
export default codeSlice.reducer;
