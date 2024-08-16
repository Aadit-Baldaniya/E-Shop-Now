import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];
export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    IncrementProduct: (state, action) => {
      state.map((value) => {
        if (value.id === action.payload) {
          value.quantity++;
        }
        return value;
      });
    },
    DecrementProduct: (state, action) => {
      state.map((value) => {
        if (value.quantity !== 1) {
          if (value.id === action.payload) {
            value.quantity--;
          }
          return value;
        }
      });
    },
    DeleteProduct: (state, action) => {
      return state.filter((value) => value.id != action.payload.id);
    },
  },
});

export const { addToCart, IncrementProduct, DecrementProduct, DeleteProduct } =
  slice.actions;

export default slice.reducer;
