import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/Contact_Page_components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto container content-baseline mb-16">
        <h1 className="text-3xl lg:text-5xl text-center py-8 font-bold  ">
          MS INDUSTRIES
        </h1>
        <div className="flex  flex-col lg:flex-row items-center justify-center  bg-slate-200  h-auto">
          {/* Left Side (Content and Button) */}
          <div className="p-8  w-full lg:w-1/2 lg:ml-28  text-center lg:text-left ">
            <div className=" mx-0 px-0">
              <h1 className="text-3xl font-bold  mb-4">Contact Us</h1>
            </div>
            <div className="flex justify-between px-0">
              <div className="w-1/2 bg-slate-700"></div>
              <ContactForm className="w-1/2 px-0 mx-0" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
