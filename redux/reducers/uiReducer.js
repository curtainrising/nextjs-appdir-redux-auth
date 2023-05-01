import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  isLoading: {}
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Action to set the authentication status
    addOne(state, action) {
      state.count += 1;
      return state;
    },
  },
});

export const { addOne, setIsLoadingState } = uiSlice.actions;

export default uiSlice.reducer;