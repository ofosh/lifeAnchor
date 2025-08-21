import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="2xl:px-20 mx-auto my-10 overflow-hidden">
      <div className="flex items-center justify-center gap-7 px-6 flex-col lg:flex-row pt-10">
        <div>
          <img className="w-110" src={assets.about_1} alt="/" />
        </div>
        <div className="flex flex-col items-start ">
          <div className="flex items-center justify-center mb-4 gap-3">
            <h4>About Us</h4>
            <hr className="w-30 text-gray-300" />
          </div>
          <div className="flex items-center justify-center flex-col lg:items-start lg:justify-center">
            <h3 className="text-3xl font-semibold text-center lg:text-left w-80">
              Your Support Is Really Powerful.
            </h3>
            <p className="w-95 text-center lg:text-left py-3">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
            <button className="bg-[#219d80] px-2 py-2 text-white rounded-xl">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 gap-7 flex-col-reverse lg:flex-row-reverse pt-15">
        <div>
          <img className="w-110" src={assets.about_2} alt="/" />
        </div>
        <div className="flex flex-col items-start px-8">
          <div className="flex items-center justify-center mb-4 gap-3">
            <h4>Welcome To LifeAnchor</h4>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start">
            <h3 className="text-3xl font-semibold text-center lg:text-left w-80">
              Let Us Come Together To Make a Difference
            </h3>
            <p className="text-center lg:text-left text-sm lg:text-lg w-95 py-3">
              The challenges facing communities around the world are vast, but
              when we come together, there is no limit to the change, we can
              create.At LifeAnchor we believe that every person has the power to
              make a difference—whether through a donation, volunteering, or
              spreading awareness.
            </p>
            <div className="flex lg:items-start items-center justify-center gap-4 flex-col lg:flex-row py-4 px-1">
              <div className="bg-gray-300 py-3 px-1">
                <h3>Our Mission</h3>
                <p className="text-[14px] font-normal text-[#555555] w-50">
                  To Empower Communities with relevant information & Skills
                  through Strategic Advocacy for Peace, access to Basic
                  Education & Health care for sustainable  Development.
                </p>
              </div>
              <div className="bg-gray-300 py-3 px-1">
                <h3>Our Vision</h3>
                <p className="text-[14px] font-normal text-[#555555] w-50">
                  Socio-economic & A Wholistic Emancipation of Humanity.
                </p>
              </div>
            </div>
            <button className="bg-[#219d80] px-2 py-2 text-white rounded-xl">
              Read More
            </button>
          </div>
          <div className="flex items-center justify-start flex-col gap-3 mt-3">
            <img src={assets.about_3} alt="/" />
            <img src={assets.about_4} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
