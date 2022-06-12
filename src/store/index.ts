import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth/authSlice";
import userReducer from "./reducers/users/userSlice";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
