import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  createUser: [],
  loginUserData: [],
  forgetPasswordData: [],
};

export const createNewUser = createAsyncThunk(
  "auth/createNewUser",
  async (file) => {
    try {
      const res = await baseAPI.post(`/api/v1/auth/signup`, file);
      return res;
    } catch (err) {
      return err.response;
    }
  }
);

export const loginUser = createAsyncThunk("auth/loginUser", async (file) => {
  try {
    const res = await baseAPI.post(`/api/v1/auth/login`, file);
    return res;
  } catch (err) {
    return err.response;
  }
});

export const forgetPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (file) => {
    try {
      const res = await baseAPI.post(`/api/v1/auth/forgotPasswords`, file);
      return res;
    } catch (err) {
      return err.response;
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.createUser = action.payload;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginUserData = action.payload;
    });
    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      state.forgetPasswordData = action.payload;
    });
  },
});

export default authSlice.reducer;
