import { createAsyncThunk } from "@reduxjs/toolkit";

import UserService from "../../../services/user-service";

export const getUsers = createAsyncThunk("get/allUsers", async () => {
  try {
    const response = await UserService.fetchUsers();
    return response.data;
  } catch (e: any) {
    console.log(e);
  }
  return null;
});
