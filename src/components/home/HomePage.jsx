import React from "react";
import HomeHero from "./HomeHero";
import HomeFeatures from "./HomeFeatures";
import HomePropertyCards from "./HomePropertyCards";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <HomeFeatures />
      <HomePropertyCards />
    </div>
  );
};

export default HomePage;
