import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  res: [],
  productReviews: [],
  deleteReview: [],
};

export const createReview = createAsyncThunk(
  "review/createReview",
  async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.post(
        `/api/v1/products/${id.id}/reviews`,
        {
          review: id.review,
          rating: id.rating,
        },
        config
      );
      return res;
    } catch (err) {
      return err.response;
    }
  }
);

export const getAllReviewProduct = createAsyncThunk(
  "review/getall",
  async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.get(
        `/api/v1/products/${data.id}/reviews?page=${data.page}&limit=${data.limit}`,
        config
      );
      return res.data;
    } catch (err) {
      return err.response;
    }
  }
);

export const deleteReview = createAsyncThunk("Rate/delete", async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const res = await baseAPI.delete(`/api/v1/reviews/${id}`, config);
    return res.data;
  } catch (err) {
    return err.response;
  }
});

const authSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.res = action.payload;
    });
    builder.addCase(getAllReviewProduct.fulfilled, (state, action) => {
      state.productReviews = action.payload;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.deleteReview = action.payload;
    });
  },
});

export default authSlice.reducer;
