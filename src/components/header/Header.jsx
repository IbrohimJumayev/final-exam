import React from "react";
import CarouselSectioin from "./CorouselSection";

const Header = () => {
  return (
    <div className="bg">
      <div className="text-center pt-14 pb-4">
        <h1 className="text-6xl text-sky font-bold">CRYPTOFOLIO WATCH LIST</h1>
        <p className="text-[#A9A9A9] text-sm mt-4 font-semibold">
          Get all the Info regarding your favorite Crypto Currency
        </p>
      </div>
      <CarouselSectioin />
    </div>
  );
};

export default Header;
