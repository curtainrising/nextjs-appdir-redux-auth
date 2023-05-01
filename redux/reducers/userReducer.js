import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the authentication status
    loginSuccess(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return {};
    }
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;