import React from "react";
import { assets } from "../assets/assets";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const today = new Date();
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-14 bg-gray-900 max-w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center ">
        <div className="flex justify-start">
          <img src={assets.logo} width={200} alt="" />
        </div>
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Quick Link</h3>
          <ul className="flex flex-col gap-2  text-gray-400">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Blog Post
            </a>
            <a href="#" className="hover:text-white">
              Photo Gallery
            </a>
          </ul>
        </div>
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Get In Touch</h3>
          <ul className="flex flex-col gap-2  text-gray-400">
            <a href="#Home" className="hover:text-white">
              Contact Us
            </a>
            <a href="#About" className="hover:text-white">
              Our Services
            </a>
          </ul>
        </div>
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Address</h3>
          <ul className="flex flex-col gap-2  text-gray-400">
            <a href="#Home" className="hover:text-white">
              2464 Royal Ln, Mesa, New Jersey 45463
            </a>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h3>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-green-800 text-white">
              Newsletter
            </button>
          </div>
          <p className="text-gray-400 mt-4 max-w-80">
            Your email is safe with us, we don't spam
          </p>
          <div className="flex items-center justify-start gap-3 pt-2">
            <FaTwitter className="p-1 text-3xl text-gray-700 bg-green-100 rounded-full" />
            <FaInstagram className="p-1 text-3xl text-gray-700 bg-green-100 rounded-full" />
            <FaPinterest className="p-1 text-3xl text-gray-700 bg-green-100 rounded-full" />
            <FaYoutube className="p-1 text-3xl text-gray-700 bg-green-100 rounded-full" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-4 text-center text-gray-500">
        Designed by Dami and Developed by Tobi
      </div>
    </div>
  );
};

export default Footer;
