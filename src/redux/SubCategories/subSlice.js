import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = { subCategory: [] };

export const postSubCategory = createAsyncThunk(
  "category/postsubCategory",
  async (file) => {
    const res = await baseAPI.post(`/api/v1/subcategories`, file);
    return res.data;
  }
);

export const getAllsub = createAsyncThunk("sub/getsub", async (subID) => {
  const res = await baseAPI.get(`/api/v1/categories/${subID}/subcategories`);
  return res.data.data;
});
const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllsub.fulfilled, (state, action) => {
      state.subCategory = action.payload;
    });
  },
});

export default subCategorySlice.reducer;
