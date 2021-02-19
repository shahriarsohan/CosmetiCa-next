import React, { Component } from "react";

import NavBar from "../Navbar/Navbar";
import Footer from "../Home/Footer";
import About from "./About";

export default class AboutApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Footer />
      </div>
    );
  }
}
