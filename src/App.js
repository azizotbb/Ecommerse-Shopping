import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NavbarLogin from "./components/uitily/NavbarLogin";
import LoginPage from "./pages/auth/LoginPage";
import RegistrarPag from "./pages/auth/RegistrarPag";
import AllCategory from "./pages/category/AllCategory";
import AllBrand from "./pages/brand/AllBrand";
import ShopProductPage from "./pages/product/ShopProductPage";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
