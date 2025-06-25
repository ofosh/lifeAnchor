import React from "react";
import { brand } from "../assets/assets";

const Brands = () => {
  return (
    <div className="py-4 mt-5 px-8 container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center">
        {brand.map((b, index) => (
          <div key={index}>
            <img className="w-[75%]" src={b.imgUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
