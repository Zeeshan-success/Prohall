import HeroSection from "@/components/herosection/HeroSection";
import NavBar from "@/components/Navbar/NavBar";
import Need from "@/components/needsection/Need";
import StepbyStep from "@/components/stepbysetp/StepbyStep";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-[#f1f1f1]">
        <NavBar />
        <HeroSection />
        <Need />

        <StepbyStep />
      </div>
    </>
  );
};

export default Home;
