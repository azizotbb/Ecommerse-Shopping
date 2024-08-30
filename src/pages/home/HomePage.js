import React from "react";
import Slider from "../../components/home/Slider";
import HomeCategory from "../../components/home/HomeCategory";
import ProductsCardContainer from "../../components/product/ProductsCardContainer ";
import DiscountSection from "../../components/home/DiscountSection";
import HomeBrand from "../../components/home/HomeBrand";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <ProductsCardContainer title="الاكثر انتشارا" btntitle="المزيد" />
      <DiscountSection />
      <ProductsCardContainer title="الجوالات" btntitle="المزيد" />
      <HomeBrand />
    </div>
  );
}
