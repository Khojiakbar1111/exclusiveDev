import React from "react";
import "./home.css";
import FlashSales from "../../components/flashSales/FlashSales";
import Categories from "../../components/categories/Categories";
import BestSelling from "../../components/bestSelling/BestSelling";
import Recommend from "../../components/recommend/Recommend";
import OurProducts from "../../components/ourProducts/OurProducts";
import Featured from "../../components/featured/Featured";
import Service from "../../components/service/Service";
import HomeCategory from "../../components/homeCategory/HomeCategory";

const Home = ({ addToCart, addToLike }) => {
  return (
    <div>
      <HomeCategory />
      <FlashSales addToCart={addToCart} addToLike={addToLike} />
      <Categories />
      <BestSelling />
      <Recommend />
      <OurProducts addToCart={addToCart} />
      {/* <Featured /> */}
      <Service />
    </div>
  );
};

export default Home;
