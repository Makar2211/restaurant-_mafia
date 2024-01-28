import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PizzaState {
  pizzaPage: number;
}

const initialState: PizzaState = {
  pizzaPage: 0,
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    pizzaPage: (state, actions: PayloadAction<number>) => {
      state.pizzaPage = actions.payload;
    },
  },
});

export const { pizzaPage } = pizzaSlice.actions;

export default pizzaSlice.reducer;
