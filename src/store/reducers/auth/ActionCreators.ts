import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../../http";
import { IAuthResponse } from "../../../models/response/AuthResponse";
import { AuthService } from "../../../services/AuthService";

interface ILogin {
  email: string;
  password: string;
}

export const registration = createAsyncThunk(
  "auth/registration",
  async (payload: ILogin) => {
    try {
      const { email, password } = payload;
      const response = await AuthService.registration(email, password);
      if (response.data.message) {
        throw new Error(response.data.message);
      }
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (e: any) {
      console.log(e);
    }
  },
);

export const login = createAsyncThunk("auth/login", async (payload: ILogin) => {
  try {
    const { email, password } = payload;
    const response = await AuthService.login(email, password);
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (e: any) {
    console.log(e);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await AuthService.logout().then(() => {
      localStorage.removeItem("token");
    });
  } catch (e: any) {
    console.log(e);
  }
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (e: any) {
    console.log(e);
    localStorage.removeItem("token");
  }
});
