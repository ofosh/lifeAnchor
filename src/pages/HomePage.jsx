import React from "react";

import Banner from "../components/Banner";
import About from "../components/About";
import Causes from "../components/Causes";
import Testimonial from "../components/Testimonial";
import Facts from "../components/Facts";
import News from "../components/News";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Causes />
      <Testimonial />
      <Facts />
      <News />
      <Brands />
      <Footer />
    </>
  );
};

export default HomePage;
