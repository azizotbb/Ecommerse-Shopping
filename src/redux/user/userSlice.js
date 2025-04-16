import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  res: [],
  resAllAddress: [],
  resDelete: [],
  resUpdate: [],
  resPassword: [],
};

export const addUserAddress = createAsyncThunk(
  "User/addUserAddress",
  async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.post(
        `/api/v1/addresses`,
        {
          alias: id.alias,
          details: id.detalis,
          phone: id.phone,
          city: id.city,
          postalCode: "41516",
        },
        config
      );
      return res;
    } catch (err) {
      return err.response;
    }
  }
);

export const getAllUserAddress = createAsyncThunk(
  "user/getAddress",
  async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.get(`/api/v1/addresses`, config);
      return res.data;
    } catch (err) {
      return err.response;
    }
  }
);

export const deleteUserAddress = createAsyncThunk(
  "Address/delete",
  async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.delete(`/api/v1/addresses/${id}`, config);
      return res.data;
    } catch (err) {
      return err.response;
    }
  }
);

export const updateUser = createAsyncThunk("User/updateUser", async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const res = await baseAPI.put(
      `/api/v1/users/updateMe`,
      {
        name: id.name,
        email: id.email,
        phone: id.phone,
      },
      config
    );
    return res;
  } catch (err) {
    return err.response;
  }
});

export const updatePassword = createAsyncThunk(
  "User/updatePassword",
  async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.put(
        `/api/v1/users/changeMyPassword`,
        {
          currentPassword: id.currentPassword,
          password: id.password,
          passwordConfirm: id.passwordConfirm,
        },
        config
      );
      return res;
    } catch (err) {
      return err.response;
    }
  }
);

const usertSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUserAddress.fulfilled, (state, action) => {
      state.res = action.payload;
    });

    builder.addCase(getAllUserAddress.fulfilled, (state, action) => {
      state.resAllAddress = action.payload;
    });

    builder.addCase(deleteUserAddress.fulfilled, (state, action) => {
      state.resDelete = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.resUpdate = action.payload;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.resPassword = action.payload;
    });
  },
});

export default usertSlice.reducer;
