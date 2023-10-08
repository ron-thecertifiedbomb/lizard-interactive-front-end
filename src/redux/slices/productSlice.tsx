import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/interfaces/product';

interface ProductState {
  productList: Product[];
}

const initialState: ProductState = {
  productList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
    },
    getCurrentProductState: (state) => {
      return state;
    },
  },
});

export const { setProductList,  getCurrentProductState } = productSlice.actions;
export default productSlice.reducer;
