import React from "react";
import Slider from "../../components/home/Slider";
import HomeCategory from "../../components/home/HomeCategory";
import ProductsCardContainer from "../../components/product/ProductsCardContainer ";
import DiscountSection from "../../components/home/DiscountSection";
import HomeBrand from "../../components/home/HomeBrand";
import HomeProductsHook from "../../hooks/product/HomeProductsHook";

export default function HomePage() {
  const [items] = HomeProductsHook();

  return (
    <div>
      <Slider />
      <HomeCategory />
      <ProductsCardContainer
        Products={items}
        title="الاكثر انتشارا"
        btntitle="المزيد"
      />
      <DiscountSection />
      <ProductsCardContainer
        title="الجوالات"
        btntitle="المزيد"
        Products={items}
      />
      <HomeBrand />
    </div>
  );
}
