import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../../interfaces/IUser";
import { checkAuth, login, logout, registration } from "./ActionCreators";

interface IAuth {
  user: IUser;
  isAuth: boolean;
}

const initialState: IAuth = {
  user: {
    _id: "",
    email: "",
    isActivated: false,
    firstName: "",
    secondName: "",
    rooms: [],
  },
  isAuth: false,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload?.user;
        state.isAuth = true;
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.user) {
        state.user = action.payload?.user;
        state.isAuth = true;
      }
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
      state.user = {} as IUser;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload?.user) {
        state.isAuth = true;
        state.user = action.payload?.user;
      }
    });
  },
});

export default authSlice.reducer;
// export const {} = authSlice.actions;
