import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  brands: [],
  isPostLoding: false,
  isGetAllLoding: true,
  oneBrand: [],
};

export const getAllBrand = createAsyncThunk("brand/getall", async (page) => {
  const res = await baseAPI.get(`/api/v1/brands?limit=6&page=${page}`);
  return res.data;
});
export const getAllBrands = createAsyncThunk(
  "brands/getallbrands",
  async () => {
    const res = await baseAPI.get(`/api/v1/brands`);
    return res.data;
  }
);

export const getOneBrand = createAsyncThunk("brands/getone", async (id) => {
  const res = await baseAPI.get(`/api/v1/brands/${id}`);
  return res.data;
});

export const postBrand = createAsyncThunk("brand/postBrand", async (file) => {
  const res = await baseAPI.post(`/api/v1/brands`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
});
const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBrand.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.isGetAllLoding = false;
    });
    builder.addCase(getAllBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.isGetAllLoding = false;
    });
    builder.addCase(getOneBrand.fulfilled, (state, action) => {
      state.oneBrand = action.payload;
    });
    builder.addCase(postBrand.pending, (state, action) => {
      state.isPostLoding = true;
    });
    builder.addCase(postBrand.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.isPostLoding = false;
    });
    builder.addCase(postBrand.rejected, (state, action) => {
      state.isPostLoding = false;
    });
  },
});

export default brandSlice.reducer;
