import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCard from "../components/About_page_components/TeamCard";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto content-baseline">
        <h1 className="text-3xl lg:text-5xl text-center py-8 font-bold  ">
          About MS INDUSTRIES
        </h1>
        <div className="flex  flex-col lg:flex-row items-center justify-center  bg-slate-200  h-auto">
          {/* Left Side (Content and Button) */}
          <div className="p-8  w-full lg:w-1/2 lg:ml-28  text-center lg:text-left ">
            <div className="container ">
              <h1 className="text-3xl font-bold  mb-4">Our Vision</h1>
              <p className="text-lg mb-10">
                To become a leading provider of high-quality and innovative
                animal fodder solutions that maximize milk production, while
                fostering sustainable and profitable agriculture
                practices for farmers.
              </p>
              <h1 className="text-3xl font-bold mb-4">Mission statement</h1>
              <p className="text-lg mb-6">
                At MS Industries, we are committed to providing the best TMR
                solutions, silage management, and dairy nutrition services for
                dairy farmers. Our aim is to improve the overall well-being of
                dairy herds by providing high-quality feed and expert advice. We
                understand the importance of healthy cows and happy farmers, and
                we strive to achieve this through our dedication to quality and
                innovation. We understand the pivotal role that agriculture
                plays in our economy, and we are committed to supporting farmers
                in this crucial sector.
              </p>
            </div>
          </div>

          {/* Right Side (Carousel) */}
          <div className="lg:w-1/2 lg:my-16 lg:pb-0 pb-16">
            <img
              className="rounded-md"
              src="https://10web-site.ai/13/wp-content/uploads/sites/15/2023/09/herson-rodriguez-w8CcH9Md4vE-unsplash_XW4OklR9.webp"
            ></img>
          </div>
        </div>
        <h1 className="text-3xl lg:text-5xl text-center py-8 font-bold  ">
          Our team
        </h1>
        <div className="flex  flex-col lg:flex-row items-center justify-center  bg-slate-200  h-auto">
          <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
            <TeamCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
