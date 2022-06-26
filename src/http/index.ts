import { notification } from "antd";
import axios, { AxiosRequestConfig } from "axios";

import { IAuthResponse } from "../models/response/AuthResponse";

export const API_URL = `http://localhost:5000`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    notification.error({
      message: error.response.data.message || "Error!",
      duration: 15,
    });

    if (error.response.status === 401) {
      try {
        const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Not authorized");
      }
    }
    return error.response;
  },
);

export default $api;
