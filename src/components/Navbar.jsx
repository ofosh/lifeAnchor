import { useState } from "react";
import { assets } from "../assets/assets";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="z-10 py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-evenly items-center">
        <div>
          <img src={assets.logo} alt="logo" />
        </div>
        <div
          className={`text-gray-700 max-sm:bg-green-700 sm:text-sm ${
            !sidebarOpen
              ? "max-sm:w-0 overflow-hidden"
              : "max-sm:w-60 max-sm:pl-10"
          } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full  max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex max-sm:items-start gap-5 transition-all`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 ">
            <img
              onClick={() => setSidebarOpen(false)}
              className="w-5 absolute right-4 top-4 sm:hidden"
              src={assets.close_icon}
              alt=""
            />
            <li
              onClick={() => setSidebarOpen(false)}
              className="text-xl font-medium text-white leading-[27px] cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => setSidebarOpen(false)}
              className="text-xl font-medium text-white leading-[27px] cursor-pointer"
            >
              Causes
            </li>
            <Link to={"/about-us"}>
              <li
                onClick={() => setSidebarOpen(false)}
                className="text-xl font-medium text-white leading-[27px] cursor-pointer"
              >
                About
              </li>
            </Link>
            <li
              onClick={() => setSidebarOpen(false)}
              className="text-xl font-medium text-white leading-[27px] cursor-pointer"
            >
              Pages
            </li>
            <li
              onClick={() => setSidebarOpen(false)}
              className="text-xl font-medium text-white leading-[27px] cursor-pointer"
            >
              Blogs
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <select className="text-white">
            <option className="text-black" value="En">
              En
            </option>
            <option className="text-black" value="Esp">
              Esp
            </option>
            <option className="text-black" value="Fr">
              Fr
            </option>
          </select>
          <Link to={"/contact-us"}>
            <button className="bg-black py-2 px-4 lg:text-lg text-white rounded cursor-pointer text-sm">
              Contact us
            </button>
          </Link>
          <FaSearch className="border px-1 py-1 text-[25px] text-white" />
          <img
            src={assets.menu_icon}
            onClick={() => setSidebarOpen(true)}
            alt="/"
            className="w-8 sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
