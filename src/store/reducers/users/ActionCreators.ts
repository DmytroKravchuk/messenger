import {createAsyncThunk} from "@reduxjs/toolkit";
import {notification} from "antd";
import UserService from "../../../services/UserService";

export const getUsers = createAsyncThunk(
    "get/allUsers",
    async () => {
        try {
            const response = await UserService.fetchUsers();
            return response.data;
        } catch (e: any) {
            console.log(e);
            notification.error({message: e.message || "get users error"})
        }
});