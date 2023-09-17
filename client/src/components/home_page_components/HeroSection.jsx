import React from "react";
import logo from "../../assets/MsLogo.png";
import Carousel from "./Carousel";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#F4F8FD]  h-auto">
      {/* Left Side (Content and Button) */}
      <div className="p-8 w-full lg:w-1/2 lg:ml-28  text-center lg:text-left ">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Welcome to MS INDUSTRIES
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Your Source for High-Quality TMR and Silage Solutions
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Explore Products
        </button>
      </div>

      {/* Right Side (Carousel) */}
      <div className="lg:w-1/2 lg:my-16 lg:pb-0 pb-16">
        <img
          className="rounded-md"
          src="https://10web-site.ai/13/wp-content/uploads/sites/15/2023/09/georgie-cobbs-bKjHgo_Lbpo-unsplash_XW4OklR9.webp"
        ></img>
      </div>
    </div>
  );
}

export default HeroSection;
