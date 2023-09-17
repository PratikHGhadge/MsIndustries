import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/Contact_Page_components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-screen">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
