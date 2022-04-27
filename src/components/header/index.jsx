import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import ConnectWallet from "../ConnectWallet";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7">
          <div className="flex items-center justify-between h-32">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-50"
                  src="./LOGO.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden h-16 md:ml-10 md:flex items-end">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/dashboard" className="text-white px-3 py-2 text-sm font-medium header-item">
                    Dashboard
                  </Link>
                  <Link to="/calculator" className="text-white px-3 py-2 text-sm font-medium header-item">
                    Calculator
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <ConnectWallet />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">                
                <Link to="/dashboard" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                </Link>
                <Link to="/calculator" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Calculator
                </Link>                
              </div>
            </div>
          )}
        </Transition>
      </nav>      
    </div>
  );
}

export default Header;
