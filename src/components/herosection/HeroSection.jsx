import React from "react";
import MainPhoto from "./MainPhoto";
import SecondContainer from "./SecondContainer";

const HeroSection = () => {
  return (
    <>
      <div className="bg-white rounded-3xl mx-10">
        <MainPhoto />
        <SecondContainer />
      </div>
    </>
  );
};

export default HeroSection;
