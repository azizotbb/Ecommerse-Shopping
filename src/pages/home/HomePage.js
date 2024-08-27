import React from "react";
import NavbarLogin from "../../components/uitily/NavbarLogin";
import Slider from "../../components/home/Slider";
import HomeCategory from "../../components/home/HomeCategory";
import ProductsCardContainer from "../../components/product/ProductsCardContainer ";
import DiscountSection from "../../components/home/DiscountSection";
import BrandContainer from "../../components/brand/BrandContainer";

export default function HomePage() {
  return (
    <div>
      <NavbarLogin />
      <Slider />
      <HomeCategory />
      <ProductsCardContainer title="الاكثر انتشارا" btntitle="المزيد" />
      <DiscountSection />
      <ProductsCardContainer title="الجوالات" btntitle="المزيد" />
      <BrandContainer />
    </div>
  );
}
