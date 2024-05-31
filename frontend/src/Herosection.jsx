import React from "react";

import hero from "../src/assets/herosection.png";
const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <img src={hero} style={{ width: "100%" }} />
    </div>
  );
};

export default HeroSection;
