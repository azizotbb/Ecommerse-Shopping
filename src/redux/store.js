import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import brandReducer from "./brand/brandSlice";
import subCategoryReducer from "./SubCategories/subSlice";
import productReducer from "./product/productSlice";
import authReducer from "./auth/authSlice";
import reviewReducer from "./review/reviewSlice";
import wishListReducer from "./wishList/wishListSlice";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
export default configureStore({
  reducer: {
    category: categoryReducer,
    brand: brandReducer,
    subCategory: subCategoryReducer,
    product: productReducer,
    auth: authReducer,
    review: reviewReducer,
    wishList: wishListReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
