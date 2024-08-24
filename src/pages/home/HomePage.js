import React from "react";
import NavbarLogin from "../../components/uitily/NavbarLogin";
import Slider from "../../components/home/Slider";
import HomeCategory from "../../components/category/HomeCategory";

export default function HomePage() {
  return (
    <div>
      <NavbarLogin />
      <Slider />
      <HomeCategory />
    </div>
  );
}
