import { createSlice } from "@reduxjs/toolkit";

import { IRoom } from "../../../interfaces/IChat";
import { IUser } from "../../../interfaces/IUser";
import { checkAuth, login, logout, registration } from "./ActionCreators";

interface IAuth {
  user: IUser;
  rooms: IRoom[];
  isAuth: boolean;
}

const initialState: IAuth = {
  user: {
    _id: "",
    email: "",
    isActivated: false,
    firstName: "",
    secondName: "",
    roomsIds: [],
  },
  rooms: [],
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
        // @ts-ignore
        state.rooms = action.payload?.rooms;
        state.isAuth = true;
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload.user;
        // @ts-ignore
        state.rooms = action.payload.rooms;
        state.isAuth = true;
      }
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
      state.user = {} as IUser;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload) {
        state.isAuth = true;
        state.user = action.payload.user;
        // @ts-ignore
        state.rooms = action.payload.rooms;
      }
    });
  },
});

export default authSlice.reducer;
// export const {} = authSlice.actions;
