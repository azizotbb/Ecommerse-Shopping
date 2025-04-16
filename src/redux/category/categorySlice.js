import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  categorys: [],
  isPostLoding: false,
  isGetAllLoding: true,
  onecategory: [],
};

export const getAllCategorypage = createAsyncThunk(
  "category/getpage",
  async (page) => {
    const res = await baseAPI.get(`/api/v1/categories?page=${page}&limit=12`);
    return res.data;
  }
);
export const getAllCategory = createAsyncThunk("category/getall", async () => {
  const res = await baseAPI.get(`/api/v1/categories`);
  return res.data;
});

export const getOneCategory = createAsyncThunk(
  "category/getone",
  async (id) => {
    const res = await baseAPI.get(`/api/v1/categories/${id}`);
    return res.data;
  }
);

export const postCategory = createAsyncThunk(
  "category/postCategory",
  async (file) => {
    const res = await baseAPI.post(`/api/v1/categories`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategorypage.fulfilled, (state, action) => {
      state.categorys = action.payload;
      state.isGetAllLoding = false;
    });
    builder.addCase(postCategory.pending, (state, action) => {
      state.isPostLoding = true;
    });
    builder.addCase(postCategory.fulfilled, (state, action) => {
      state.categorys = action.payload;
      state.isPostLoding = false;
    });
    builder.addCase(postCategory.rejected, (state, action) => {
      state.isPostLoding = false;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.categorys = action.payload;
      state.isGetAllLoding = false;
    });
    builder.addCase(getOneCategory.fulfilled, (state, action) => {
      state.onecategory = action.payload;
    });
  },
});

export default categorySlice.reducer;
