import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";
const initialState = {
  addCartRes: [],
  getAllUserCartRes: [],
  clearUserCartRes: [],
  deleteCartItemRes: [],
  updateCartItemRes: [],
};

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (prod) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.post(
        `/api/v1/cart`,
        {
          productId: prod.productId,
          color: prod.color,
        },
        config
      );
      return res;
    } catch (err) {
      return err.response;
    }
  }
);

export const getAllUserCart = createAsyncThunk("cart/getall", async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const res = await baseAPI.get(`/api/v1/cart`, config);
    return res.data;
  } catch (err) {
    return err.response;
  }
});

export const clearUserCart = createAsyncThunk(
  "cart/clearUserCart",
  async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.delete(`/api/v1/cart`, config);
      return res.data;
    } catch (err) {
      return err.response;
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.delete(`/api/v1/cart/${id.id}`, config);
      return res.data;
    } catch (err) {
      return err.response;
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async (item) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await baseAPI.put(
        `/api/v1/cart/${item.id}`,
        {
          count: item.itemCount,
        },
        config
      );
      return res.data;
    } catch (err) {
      return err.response;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.addCartRes = action.payload;
    });
    builder.addCase(getAllUserCart.fulfilled, (state, action) => {
      state.getAllUserCartRes = action.payload;
    });

    builder.addCase(clearUserCart.fulfilled, (state, action) => {
      state.clearUserCartRes = action.payload;
    });
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.deleteCartItemRes = action.payload;
    });
    builder.addCase(updateCartItem.fulfilled, (state, action) => {
      state.updateCartItemRes = action.payload;
    });
  },
});

export default cartSlice.reducer;
