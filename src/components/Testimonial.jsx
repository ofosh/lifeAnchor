import React from "react";
import { assets } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="py-4 mt-5 px-8 bg-[#252a34] 85%">
      <div className="text-white flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center py-2 gap-1">
          <hr className="w-12" />
          <h5 className="text-2xl font-semibold">Our Testimonials</h5>
          <hr className="w-12" />
        </div>
        <h3 className="text-3xl">What People Say</h3>
        <div className="flex items-center flex-col justify-center py-3">
          {/* image goes inside here */}
          <div className="rounded-full bg-gray-400 px-9 py-9 w-10 mt-4 border-2 border-[#219d8a]"></div>
          <h3 className="text-white font-medium text-2xl text-center">
            Agada Simon
          </h3>
          <p className="text-center text-lg">Founder</p>
          <img src={assets.quote} alt="" />
          <p className="text-center text-[20px] font-[700] max-w-sm lg:max-w-2xl my-3 leading-[28px]">
            Empowering Communities:"Working with LifeAnchor has been a
            life-changing experience. Through their education initiatives, I've
            seen firsthand how they help lift communities out of poverty. Their
            dedication to sustainable development is inspiring, and their impact
            on local families is truly transformative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
