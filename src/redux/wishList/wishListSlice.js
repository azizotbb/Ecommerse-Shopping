import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  resAdd: [],
  resRemove: [],
  allWishlist: [],
};

export const addToWishList = createAsyncThunk("wishList/addFav", async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const res = await baseAPI.post(
      `/api/v1/wishlist`,
      {
        productId: id,
      },
      config
    );
    return res;
  } catch (err) {
    return err.response;
  }
});

export const removeFomWishList = createAsyncThunk("fav/delete", async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const res = await baseAPI.delete(`/api/v1/wishlist/${id}`, config);
    return res;
  } catch (err) {
    return err.response;
  }
});

export const getWishList = createAsyncThunk("wishList/getall", async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const res = await baseAPI.get(`/api/v1/wishlist`, config);
    return res.data;
  } catch (err) {
    return err.response;
  }
});

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToWishList.fulfilled, (state, action) => {
      state.resAdd = action.payload;
    });

    builder.addCase(removeFomWishList.fulfilled, (state, action) => {
      state.resRemove = action.payload;
    });

    builder.addCase(getWishList.fulfilled, (state, action) => {
      state.allWishlist = action.payload;
    });
  },
});

export default wishListSlice.reducer;
