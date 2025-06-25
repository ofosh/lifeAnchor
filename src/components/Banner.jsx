import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/bg.png";

const Banner = () => {
  return (
    <>
      <div
        className="bg-[url(../assets/bg.png)] bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Navbar />
        <div className="max-w-full text-center flex items-center justify-center flex-col mt-10">
          <p className="font-bold text-2xl text-white">Give Hope</p>
          <h2 className="text-xl sm:text-xl md:text-[32px] inline-block lg:max-w-3xl max-w-[250px] leading-normal font-extrabold pt-5 text-white text-center">
            Lifeanchor International Development Foundation (LIDF)
          </h2>
          <p className="text-xl max-w-xl lg:text-2xl lg:w-180 w-55 text-white mt-4">
            We Seek out world changers and difference makers around the
            globe,and equip them to fulfill their unique purpose.
          </p>
          <div className=" flex items-center justify-center md:flex-row flex-col mt-10 gap-3 ">
            <button className="bg-[#219D80] text-white px-3 py-3 border text-lg cursor-pointer">
              Donate Now
            </button>
            <button className="bg-transparent text-white px-3 py-3 border text-lg cursor-pointer">
              Know About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
