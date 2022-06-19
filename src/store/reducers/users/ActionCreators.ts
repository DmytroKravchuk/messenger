import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUserSearch } from "../../../interfaces/IUser";
import UserService from "../../../services/user-service";

export const getUsers = createAsyncThunk(
  "get/allUsers",
  async (params: IUserSearch) => {
    try {
      const response = await UserService.fetchUsers(params);
      return response.data;
    } catch (e: any) {
      console.log(e);
    }
    return null;
  },
);
