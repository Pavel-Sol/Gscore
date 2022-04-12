import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from 'types';

type InitialProductStateType = {
  selectedProduct: ProductType | null;
  products: ProductType[];
};
const initialState: InitialProductStateType = {
  selectedProduct: null,
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, { payload }: PayloadAction<ProductType[]>) {
      state.products = payload;
    },

    selectProduct(state, { payload }: PayloadAction<ProductType>) {
      state.selectedProduct = payload;
    },
  },
});

export const { selectProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
