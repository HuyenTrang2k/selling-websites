import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../model/productProps";

interface CartState {
  products: ProductProps[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
        state.total += action.payload.price;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((product) => product.id === productId);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.total -= product.price;
        } else {
          state.quantity -= 1;
          state.products = state.products.filter(
            (product) => product.id !== productId
          );
          state.total -= product.price;
        }
      }
    },
    clearProduct: (state, action: PayloadAction<ProductProps[]>) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearProduct } = cartSlice.actions;
export default cartSlice.reducer;
