import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSilce = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      toast.error("Email hoặc mật khẩu không đúng");
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSilce.actions;
export default userSilce.reducer;
