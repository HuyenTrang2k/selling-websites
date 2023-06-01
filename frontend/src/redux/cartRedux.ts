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

const calculateTotal = (products) => {
  let quantity = 0;
  let total = 0;

  products.forEach((cartProduct) => {
    quantity += cartProduct.quantity;
    total += cartProduct.price * cartProduct.quantity;
  });

  return { quantity, total };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const cartProducts = action.payload.products;
      state.products = cartProducts;

      const { quantity, total } = calculateTotal(cartProducts);
      state.quantity = quantity;
      state.total = total;

    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product.id !== productId);

      const { quantity, total } = calculateTotal(state.products);
      state.quantity = quantity;
      state.total = total;

    },

    clearProduct: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearProduct } = cartSlice.actions;
export default cartSlice.reducer;
