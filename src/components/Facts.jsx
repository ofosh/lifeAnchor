import React from "react";
import { factsCard } from "../assets/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Facts = () => {
  return (
    <div className="py-4 mt-5 px-8 container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center lg:justify-start mb-4 gap-3">
            <h4>Our Facts</h4>
            <hr className="w-30 text-gray-300" />
          </div>
          <div>
            <h3 className="lg:text-3xl  text-sm font-semibold">
              We believe <br /> We can impact more lives positively with you....
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaArrowLeft className="mr-2 text-[#219d8a] bg-green-100 text-3xl px-1 py-1 rounded-full cursor-pointer" />
          <FaArrowRight className=" text-[#219d8a] bg-green-100 cursor-pointer text-3xl px-1 py-1 rounded-full" />
        </div>
      </div>
      <div className="flex items-center justify-between flex-col lg:flex-row">
        {factsCard.map((fact, index) => (
          <div key={index}>
            <div className="mt-5 bg-white rounded shadow-lg w-[250px] flex flex-col items-center justify-center py-3 px-4">
              <img className="w-[50%]" src={fact.imgUrl} alt="/" />
              <h3 className="text-2xl md:text-4xl lg:text-5xl py-3 text-center">
                {fact.num}
              </h3>
              <p className="text-2xl md:text-4xl lg:text-2xl py-3 text-center">
                {fact.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
