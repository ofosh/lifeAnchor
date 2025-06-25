import React from "react";
import { assets } from "../assets/assets";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="z-10 py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-evenly items-center">
        <div>
          <img src={assets.logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-4 ">
            <li className="text-xl font-medium text-white leading-[27px] cursor-pointer">
              Home
            </li>
            <li className="text-xl font-medium text-white leading-[27px] cursor-pointer">
              Causes
            </li>
            <li className="text-xl font-medium text-white leading-[27px] cursor-pointer">
              About
            </li>
            <li className="text-xl font-medium text-white leading-[27px] cursor-pointer">
              Pages
            </li>
            <li className="text-xl font-medium text-white leading-[27px] cursor-pointer">
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
          <button className="bg-black py-2 px-4 lg:text-lg text-white rounded cursor-pointer text-sm">
            Contact us
          </button>
          <FaSearch className="border px-1 py-1 text-[25px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
