import React from "react";
import HeroSection from "./homeComponents/heroSection/HeroSection";
import Features from "./homeComponents/features/Features";
import HomeFlashSell from "./homeComponents/homeFlashSell/HomeFlashSell";
import HomeCategory from "./homeComponents/homeCategory/HomeCategory";
import SpatialProduct from "./homeComponents/spatialProduct/SpatialProduct";
import TrendingProduct from "./homeComponents/trendingProduct/TrendingProduct";
import BestSelling from "./homeComponents/bestSelling/BestSelling";
import NewArrival from "./homeComponents/newArrival/NewArrival";
import FavouriteProduct from "./homeComponents/favouriteProduct/FavouriteProduct";
import HomeBrands from "./homeComponents/homeBrands/HomeBrands";
import HomeBlogs from "./homeComponents/homeBlogs/HomeBlogs";
import HomeSubscription from "./homeComponents/homeSubscription/HomeSubscription";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <HomeFlashSell />
      <HomeCategory />
      <SpatialProduct />
      <TrendingProduct />
      <BestSelling />
      <NewArrival />
      <FavouriteProduct />
      <HomeBrands />
      <HomeBlogs />
      <HomeSubscription />
    </>
  );
};

export default Home;
