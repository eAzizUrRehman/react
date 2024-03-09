import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/"
              className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
            >
              Log in
            </Link>
            <Link
              to="/"
              className="mr-2 rounded-lg bg-orange-700  px-4 py-2 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 lg:px-5 lg:py-2.5"
            >
              Get started
            </Link>
          </div>
          <div
            className=" hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex  flex-col  gap-10   font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={(isActive) =>
                    `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={(isActive) =>
                    `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={(isActive) =>
                    `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/github"
                  className={(isActive) =>
                    `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  GitHub
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
