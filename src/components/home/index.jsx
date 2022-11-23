import React from "react";
import Band from "./Band";
import CarouselPage from "./Carousel";
import Category from "./Category";
import Choose from "./Choose";
import RecentProp from "./RecentProperties";
import Recommend from "./Recommend";
import TestEmotion from "./TestEmotion";

const Home = () => {
  return (
    <>
      <CarouselPage />
      <Recommend />
      <Choose />
      <Category />
      <Band />
      <RecentProp />
      <TestEmotion />
    </>
  );
};

export default Home;
