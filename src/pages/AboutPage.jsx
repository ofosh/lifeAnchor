import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.png";
import { assets } from "../assets/assets";
import { factsCard1 } from "../assets/assets";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div>
        <div
          className="bg-[url(../assets/bg.png)] bg-cover bg-center h-45vh"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Navbar />
          <div className="py-8 flex items-center justify-center flex-col">
            <h3 className="text-white text-4xl ">About Us</h3>
            <h5 className="underline text-white text-sm mt-3">Home/About Us</h5>
          </div>
        </div>
        {/* About section */}

        <div className="flex flex-col items-start justify-start lg:mx-16 py-8 px-8 ">
          <div className="flex items-center justify-center gap-7 px-2 flex-col lg:flex-row pt-10">
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
          <div className="flex items-center justify-center px-2 gap-8 flex-col-reverse lg:flex-row-reverse pt-15">
            <div>
              <img className="w-110" src={assets.about_2} alt="/" />
            </div>
            <div className="flex flex-col items-start px-2 pt-8">
              <div className="flex items-center justify-center mb-4 gap-3">
                <h4>Welcome To LifeAnchor</h4>
              </div>
              <div className="flex flex-col items-center justify-center lg:items-start">
                <h3 className="text-3xl font-semibold text-center lg:text-left w-80">
                  Let Us Come Together To Make a Difference
                </h3>
                <p className="text-center lg:text-left text-sm lg:text-lg w-95 py-3">
                  The challenges facing communities around the world are vast,
                  but when we come together, there is no limit to the change, we
                  can create.At LifeAnchor we believe that every person has the
                  power to make a difference—whether through a donation,
                  volunteering, or spreading awareness.
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
          {/* card */}
          <div className="flex items-center justify-between flex-col lg:flex-row px-8 gap-4 py-4">
            {factsCard1.map((fact, index) => (
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
        <Testimonial />
        <Brands />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
