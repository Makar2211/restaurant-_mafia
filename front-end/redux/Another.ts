import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AnotherState {
  navBarLeftIndex: number;
}

const initialState: AnotherState = {
  navBarLeftIndex: 0,
};

const AnotherSliceSlice = createSlice({
  name: "AnotherSlice",
  initialState,
  reducers: {
    navBarLeftActive: (state, actions: PayloadAction<number>) => {
      state.navBarLeftIndex = actions.payload;
    },
  },
});

export const { navBarLeftActive } = AnotherSliceSlice.actions;

export default AnotherSliceSlice.reducer;
