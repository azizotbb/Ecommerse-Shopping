import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NavbarLogin from "./components/uitily/NavbarLogin";
import LoginPage from "./pages/auth/LoginPage";
import RegistrarPag from "./pages/auth/RegistrarPag";
import AllCategory from "./pages/category/AllCategory";
import AllBrand from "./pages/brand/AllBrand";
import ShopProductPage from "./pages/product/ShopProductPage";
import ProductDetailsPage from "./pages/product/ProductDetailsPage";
import Footer from "./components/uitily/Footer ";
import CartPage from "./pages/cart/CartPage";
import ChoosePayMethoudPage from "./pages/checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./pages/admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./pages/admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./pages/admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./pages/admin/AdminAddProductsPage";

function App() {
  return (
    <div className="App " style={{ backgroundColor: " rgb(250, 250, 250)" }}>
      <NavbarLogin />

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrar" element={<RegistrarPag />} />
          <Route path="/allcategory" element={<AllCategory />} />
          <Route path="/allbarnd" element={<AllBrand />} />
          <Route path="/product" element={<ShopProductPage />} />
          <Route path="/Details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
