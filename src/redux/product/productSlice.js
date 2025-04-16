import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  products: [],
  isPostLoding: false,
  isGetAllLoding: true,
  oneProduct: [],
};

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (file) => {
    const res = await baseAPI.post(`/api/v1/products`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getall",
  async (limit) => {
    const res = await baseAPI.get(`/api/v1/products?limit=${limit} `);
    return res.data;
  }
);

export const getAllProductsPage = createAsyncThunk(
  "product/getallpage",
  async (page, limit) => {
    const res = await baseAPI.get(
      `/api/v1/products?limit=${limit}&page=${page}`
    );
    return res.data;
  }
);

export const getAllProductsSearch = createAsyncThunk(
  "product/getallsearch",
  async (queryString) => {
    const res = await baseAPI.get(`/api/v1/products?${queryString}`);
    return res.data;
  }
);

export const getOneProduct = createAsyncThunk("product/getone", async (id) => {
  const res = await baseAPI.get(`/api/v1/products/${id}`);
  return res.data;
});

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  const res = await baseAPI.delete(`/api/v1/products/${id}`);
  return res.data;
});
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postProduct.pending, (state, action) => {
      state.isPostLoding = true;
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isPostLoding = false;
    });
    builder.addCase(postProduct.rejected, (state, action) => {
      state.isPostLoding = false;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getAllProductsPage.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.oneProduct = action.payload;
    });
    builder.addCase(getAllProductsSearch.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
