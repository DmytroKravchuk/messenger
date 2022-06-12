import { createSlice } from "@reduxjs/toolkit";

import { getUsers } from "./ActionCreators";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action: any) => {
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
// export const {} = authSlice.actions;
