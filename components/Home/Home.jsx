import React, { Component } from "react";

import NavBar from "../Navbar/Navbar";
import Hero from "./Hero";
import Service from "./Service";
import WhySection from "./WhySection";
import OurService from "./OurService";
// import OurWorks from "./OurWorks";
import Pricing from "./Pricing";
// import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import ImageList from "./Gallery";
import Video from "./Video";
import Review from "./Reviex";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <ImageList />
        <Service />
        <WhySection />
        {/* <OurService /> */}
        {/* <OurWorks /> */}
        <Pricing />
        <Review />
        <Video />
        {/* <Blog /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}
