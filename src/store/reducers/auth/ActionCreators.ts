import {createAsyncThunk} from '@reduxjs/toolkit'
import {AuthService} from "../../../services/AuthService";
import {notification} from "antd";
import {IUser} from "../../../models/IUser";

export const registration = createAsyncThunk(
    "auth/registration",
    async (state: any, action: any) => {
        try {
            const {email, password} = state;
            await AuthService.registration(email, password).then(response => {
                localStorage.setItem("token", response.data.accessToken);
                state.isAuth = true;
                state.user = response.data.user as IUser;
            });
        } catch (e: any) {
            console.log(e);
            notification.error({message: e.response?.data?.message || "registration error"})
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (state: any, action: any) => {
        try {
            const {email, password} = state;
            await AuthService.login(email, password).then(response => {
                localStorage.setItem("token", response.data.accessToken);
                state.isAuth = true;
                state.user = response.data.user as IUser;
            });
        } catch (e: any) {
            console.log(e);
            notification.error({message: e.response?.data?.message || "login error"})
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            await AuthService.logout().then(() => {
                localStorage.removeItem("token");
            });
        } catch (e: any) {
            console.log(e);
            notification.error({message: e.response?.data?.message || "logout error"})
        }
    }
)