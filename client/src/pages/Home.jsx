import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/home_page_components/HeroSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}

export default Home;
