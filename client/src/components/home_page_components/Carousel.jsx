import React, { useState } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://10web-site.ai/13/wp-content/uploads/sites/15/2023/09/georgie-cobbs-bKjHgo_Lbpo-unsplash_XW4OklR9.webp",

    // Add more slide content as needed
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex transition-transform ease-in-out duration-300">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <div className="mt-24 lg:mr-8">
              <img className="rounded-md" src={slide}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
