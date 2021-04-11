import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Hero extends Component {
  render() {
    return (
      <div id="home" className="header_hero d-lg-flex  align-items-center">
        {/* hero shape */}
        {/* hero shape */}
        <div className="container">
          <div className="row">
            <div className="header_shape d-none d-lg-block" />
            <div className="header_image d-flex align-items-center">
              <div className="image">
                <img
                  className="wow fadeInRightBig"
                  data-wow-duration="2s"
                  data-wow-delay="1.6s"
                  src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png"
                  alt="Header Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header_hero_content text-center">
                <h2
                  className="hero_title wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <span>COSMETICA</span>
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  COSMETICA is a one stop Hair solution center. we provide Hair
                  replacement, Hair Fall control therapy, PRP for hair growth
                </p>
                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.9s"
                  >
                    <a
                      className="main-btn"
                      rel="nofollow"
                      href="https://rebrand.ly/plain-ud"
                    >
                      Book An Appointments
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* header hero content */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </div>
    );
  }
}
