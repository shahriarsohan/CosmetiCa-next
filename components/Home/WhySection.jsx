import React, { Component } from "react";

export default class WhySection extends Component {
  render() {
    return (
      <section id="why" className="about_area pt-115 text-center">
        <div className="about_image d-flex align-items-end justify-content-end">
          <div className="image">
            <img
              className="wow fadeInLeftBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png"
              alt="our-service-picture"
            />
          </div>
        </div>{" "}
        {/* about image */}
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div
                className="about_content wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <div className="section_title pb-35">
                  <h5 className="sub_title">Why Choose Us</h5>
                  <h4 className="main_title">Your Goal is Our Achievement</h4>
                </div>{" "}
                {/* section title */}
                <p>
                  Hair & Skin is most important part of the body & increase your
                  beauty. so we should know how we taking care of our hair &
                  skin. By COSMETCIA you can get some important solution &
                  beauty tips of Hair & Skin.
                </p>
                <ul className="about_list">
                  <li className="d-flex">
                    <div className="about_check">
                      <i className="lni lni-checkmark-circle" />
                    </div>
                    <div className="about_list_content">
                      <p>Trust</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="about_check">
                      <i className="lni lni-checkmark-circle" />
                    </div>
                    <div className="about_list_content">
                      <p>Time</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="about_check">
                      <i className="lni lni-checkmark-circle" />
                    </div>
                    <div className="about_list_content">
                      <p>Quality</p>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* about content */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
    );
  }
}
