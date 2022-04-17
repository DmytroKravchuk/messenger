import {createSlice} from "@reduxjs/toolkit";

import {IUser} from "../../../models/IUser";
import {login, logout, registration} from "./ActionCreators";

interface IAuth {
    user: IUser;
    isAuth: boolean;
}

const initialState: IAuth = {
    user: {email: "", id: "", isActivated: false},
    isAuth: false
}

const authSlice = createSlice({
    name: "authReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registration.fulfilled, (state, action) => {})
        builder.addCase(login.fulfilled, (state, action) => {})
        builder.addCase(logout.fulfilled, (state, action) => {})
    }
});

export default authSlice.reducer;
// export const {} = authSlice.actions;