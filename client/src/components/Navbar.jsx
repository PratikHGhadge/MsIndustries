import { NavLink } from "react-router-dom";
import logo from "../assets/MsLogo.png";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-12  lg:h-16 w-auto"
                    src={logo}
                    alt="ms industries logo"
                  />
                </div>
                <div className="">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                >
                  Contact
                </NavLink>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="bg-indigo-50 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/products"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Products
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
