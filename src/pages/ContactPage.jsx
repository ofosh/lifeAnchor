import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.png";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
const ContactPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div
          className="bg-[url(../assets/bg.png)] bg-cover bg-center h-45vh"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Navbar />
          <div className="py-8 flex items-center justify-center flex-col">
            <h3 className="text-white text-4xl ">Contact Us</h3>
            <h5 className="underline text-white text-sm mt-3">
              Home/Contact Us
            </h5>
          </div>
        </div>

        {/* contact-section */}

        <div className="flex flex-col items-start justify-start lg:mx-16 py-8 px-8 ">
          <h5 className="text-xl mb-2">Get in Touch</h5>
          <h2 className="text-3xl">Send us a message</h2>
        </div>

        <div className="mx-16 py-6 px-8 flex items-center flex-col lg:flex-row justify-between lg:gap-10 gap-4">
          <form>
            <div className="">
              <div className="flex gap-4 flex-col lg:flex-row items-center mt-3">
                <div className="flex items-start flex-col gap-2">
                  <label>First Name</label>
                  <input
                    className="bg-gray-300 outline-none p-3 w-[300px]"
                    type="text"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="flex items-start flex-col gap-2">
                  <label>Last Name</label>
                  <input
                    className="bg-gray-300 outline-none p-3 w-[300px]"
                    type="text"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 flex-col lg:flex-row items-center mt-3">
                <div className="flex items-start flex-col gap-2">
                  <label>Email</label>
                  <input
                    className="bg-gray-300 outline-none p-3 w-[300px]"
                    type="Email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex items-start flex-col gap-2">
                  <label>Phone Number</label>
                  <input
                    className="bg-gray-300 outline-none p-3 w-[300px]"
                    type="text"
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col gap-2">
              <label>Message</label>
              <textarea
                className="w-full h-30 bg-gray-300 px-3"
                placeholder="Message"
                name="Message"
                id=""
              ></textarea>
            </div>
            <button className="bg-green-700 text-white px-6 py-2 mt-3 rounded-xl">
              Send Message
            </button>
          </form>
          <div className="py-4 px-2 bg-gray-300 mt-4 w-full">
            <h3 className="text-2xl">Address</h3>
            <div className="pt-4">
              <p className="text-gray-900 font-light mt-2 text-md">
                <span className="font-semibold">Location:</span> 4517 Washington
                Ave. Manchester, Kentucky 39495
              </p>
              <p className="text-gray-900 font-light mt-2 text-md">
                <span className="font-semibold">Phone Number:</span>+234 805 800
                7771
              </p>
              <p className="text-gray-900 font-light mt-2 text-md">
                <span className="font-semibold">Email:</span>{" "}
                info@lifeAnchor.org
              </p>
            </div>
          </div>
        </div>
        <Brands />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
