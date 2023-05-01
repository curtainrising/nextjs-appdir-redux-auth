import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { uiSlice } from "./reducers/uiReducer";
import { formSlice } from "./reducers/formReducer";
import { userSlice } from "./reducers/userReducer";

export const makeStore = (userData) => {
  let initialData = {};
  if (userData && userData.userName) {
    initialData = {
      [userSlice.name]: userData,
    }
  }
  let store = configureStore({
    reducer: {
      [uiSlice.name]: uiSlice.reducer,
      [formSlice.name]: formSlice.reducer,
      [userSlice.name]: userSlice.reducer,
    },
    devTools: true,
    preloadedState: initialData,
  });
  return store;
}