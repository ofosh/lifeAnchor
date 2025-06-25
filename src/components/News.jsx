import React from "react";
import { news } from "../assets/assets";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaUser } from "react-icons/fa6";
const News = () => {
  return (
    <div className="py-4 mt-5 px-8 container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center">
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-4 gap-3">
            <h4>Our Facts</h4>
            <hr className="w-30 text-gray-300" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">
              We believe <br /> We can impact more lives positively with you....
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaArrowLeft className="mr-2 text-[#219d8a] bg-green-100 text-3xl px-1 py-1 rounded-full cursor-pointer" />
          <FaArrowRight className=" text-[#219d8a] bg-green-100 cursor-pointer text-3xl px-1 py-1 rounded-full" />
        </div>
      </div>
      <div className="flex items-center justify-between flex-col gap-3 lg:flex-row">
        {news.map((fact, index) => (
          <div key={index}>
            <div className="mt-5 w-[80%] bg-white rounded shadow-lg flex flex-col items-left justify-start py-2 px-2">
              <div className="px-8 py-8 w-full h-40 bg-gray-300"></div>
              <div className="flex items-center gap-3 justify-start">
                <div className="flex gap-2 items-center">
                  <span>
                    <FaUser className="text-gray-400" />
                  </span>
                  <h3 className="text-left sm:text-sm md:text-md lg:text-lg py-3 ">
                    {fact.name}
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <FaCalendar className="text-gray-400" />
                  </span>
                  <p>{fact.date}</p>
                </div>
              </div>
              <p className="sm:text-sm md:text-md lg:text-lg py-2 text-left">
                {fact.desc}
              </p>
              <button className=" border-[#219d8a] border text-[#219d8a] px-3 py-2 mx-2 my-4 rounded w-30 cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
