import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MsLogo.png";

function Footer() {
  return (
    <footer className="bg-F4F8FD p-8">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Column 1 */}
        <div className="flex-1 mb-4 lg:mb-0">
          <img src={logo} alt="Company Logo" className="w-40 " />
          <p className="text-gray-600 py-2 lg:mx-6">
            Your Trusted Source for Quality TMR and Silage Solutions Our company
            is located in a prime location that boasts excellent road
            connectivity.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex-1 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">Useful Links</h2>
          <ul className="text-md pl-2 text-gray-500">
            <li className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/products">Products</Link>
            </li>
            <li className="mb-2">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex-1 ">
          <h2 className="text-xl font-bold mb-4">Contact Info</h2>
          <div className="text-md pl-2 text-gray-500">
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: info@example.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          © 2023 MS INDUSTRIES. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
