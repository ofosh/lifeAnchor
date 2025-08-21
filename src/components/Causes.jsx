import React from "react";
import { featuredCard } from "../assets/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Causes = () => {
  return (
    <div className="px-8 py-6 container 2xl:px-20 mx-auto overflow-hidden my-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center px-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-4 gap-3">
            <h4>Latest Causes</h4>
            <hr className="w-30 text-gray-300" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold w-80">
              Find the popular cause and donate them
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaArrowLeft className="mr-2 text-[#219d8a] bg-green-100 text-3xl px-1 py-1 rounded-full cursor-pointer" />
          <FaArrowRight className=" text-[#219d8a] bg-green-100 cursor-pointer text-3xl px-1 py-1 rounded-full" />
        </div>
      </div>
      {/* Featured Card */}
      <div className="flex items-center justify-between flex-col lg:flex-row ">
        {featuredCard.map((feature, index) => (
          <div key={index}>
            <div className="mt-5 bg-white rounded shadow-lg w-[250px] flex flex-col items-start justify-center py-3 px-1">
              <img className="object-fill" src={feature.imgUrl} alt="/" />
              <h5 className="font-semibold text-black px-1">
                {feature.category}
              </h5>
              <h2 className="font-bold text-lg px-1">{feature.title}</h2>
              <p className="px-1 w-60 my-3">{feature.desc}</p>
              <img
                className="w-[100%] px-1 mb-3"
                src={feature.imgFund}
                alt="/"
              />
              <button className="text-white bg-[#219d8a] px-3 py-2 mx-2 my-4 rounded cursor-pointer">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Causes;
