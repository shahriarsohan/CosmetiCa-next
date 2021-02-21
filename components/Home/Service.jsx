import React, { Component } from "react";
import Image from "next/image";

export default class Service extends Component {
  render() {
    return (
      <section className="services_area pt-115" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-25">
                <h5 className="sub_title">About</h5>
                <h4 className="main_title">Work Process</h4>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-7">
              <div
                className="single_services text-center mt-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="services_icon">
                  {/* <i className="lni lni-write" /> */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={94}
                    height={92}
                    viewBox="0 0 94 92"
                  >
                    <path
                      className="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg> */}
                  <Image
                    width="200"
                    height="200"
                    src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/cosmetica-prp-therapy.jpg"
                  />
                </div>
                <div className="services_content">
                  <h3 className="services_title">
                    <a href="#">PRP</a>
                  </h3>
                  <p>
                    PRP therapy for hair loss is a treatment that involves
                    withdrawing a patient’s own blood, processing it so that
                    only the enriched cells (platelet-rich plasma) remain, and
                    injecting it into the scalp.
                  </p>
                </div>
              </div>{" "}
              {/* single services */}
            </div>
            <div className="col-lg-4 col-sm-7">
              <div
                className="single_services text-center mt-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <div className="services_icon">
                  <Image
                    width="200"
                    height="200"
                    src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/cosmetica-hair-system.jpg"
                  />
                </div>
                <div className="services_content">
                  <h3 className="services_title">
                    <a href="#">Hair System</a>
                  </h3>
                  <p>
                    Restore your hair with a non-surgical solution that fits
                    your lifestyle. Our exclusive non-surgical hair loss
                    solutions enable you to enjoy natural looking results and
                    keep your normal routine.
                  </p>
                </div>
              </div>{" "}
              {/* single services */}
            </div>
            <div className="col-lg-4 col-sm-7">
              <div
                className="single_services text-center mt-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.5s"
              >
                <div className="services_icon">
                  <Image
                    width="200"
                    height="200"
                    src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/cosmetica-mesotherapy.jpg"
                  />
                </div>
                <div className="services_content">
                  <h3 className="services_title">
                    <a href="#">Mesotherapy</a>
                  </h3>
                  <p>
                    Mesotherapy is a non-invasive and non-surgical cosmetic hair
                    restoration procedure for male & woman which has been
                    steadily gaining in popularity. Woman which has been
                    steadily gaining
                  </p>
                </div>
              </div>{" "}
              {/* single services */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
    );
  }
}
