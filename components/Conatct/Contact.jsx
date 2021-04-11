import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import Image from "next/image";

import Map from "../../components/map";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 23.810359857215136,
      lng: 90.36791760654015,
    },

    zoom: 11,
  };

  render() {
    return (
      <div className="container">
        <div className="about pt-115 pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-25">
                <h5 className="sub_title">Cosmetica</h5>
                <h4 className="main_title">Contact Us</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div style={{ height: "50vh", width: "100%" }}>
                <Map />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pt-10">
              <div className="d-flex contact-logo justify-content-center align-items-center">
                <Image
                  src="https://cosmetica.com.bd/wp-content/uploads/2017/04/LOGO-Final.jpg"
                  width="200"
                  height="150"
                />
              </div>

              <div className="d-flex flex-row contact-logo justify-content-center align-items-center">
                {/* <h4>Address</h4> */}
                <p className="p-5">
                  House no-01, Road no-04, Block-A, Section-10, Mirpur, Dhaka
                  (near popular hospital or benaroshi palli gate no-2) please
                  call 01784-291144 for any assistance, thanks
                </p>

                <hr />
              </div>
              <div className="p-5">
                <h5>Find us on</h5>
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="redesSociais">Redes Sociais</h1>
                    <ul className="redesSociais">
                      <li className="pinterest">
                        <a href="https://www.pinterest.com/" target="_blank">
                          <img
                            src="http://i904.photobucket.com/albums/ac243/guilhermehebert/pinterest.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="facebook">
                        <a href="https://www.facebook.com/" target="_blank">
                          <img
                            src="http://i904.photobucket.com/albums/ac243/guilhermehebert/fb.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="https://www.twitter.com/" target="_blank">
                          <img
                            src="http://i904.photobucket.com/albums/ac243/guilhermehebert/twitter.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="googleplus">
                        <a href="https://www.plus.google.com/" target="_blank">
                          <img
                            src="http://i904.photobucket.com/albums/ac243/guilhermehebert/google.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="skype">
                        <a href="https://www.skype.com/" target="_blank">
                          <img
                            src="http://i904.photobucket.com/albums/ac243/guilhermehebert/skype.png"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center"></div>
            </div>
          </div>
          <section id="contact" className="contact_area pt-70 pb-120">
            <div>
              <div className="row justify-content-end">
                <div className="col-lg-12">
                  <div
                    className="contact_wrapper mt-45 wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.9s"
                  >
                    <div className="section_title pb-15">
                      <h5 className="sub_title">Contact</h5>
                      <h4 className="main_title">Get In Touch</h4>
                      <p>
                        COSMETICA is a one stop Hair solution center. we provide
                        Hair replacement, Hair Fall control therapy, PRP for
                        hair growth.
                      </p>
                    </div>
                    <div className="contact_form">
                      <form
                        // id="contact-form"
                        action="https://send.pageclip.co/VuqhsFLA9r29bv10Esw1H6zUjI1DXhNn"
                        className="pageclip-form"
                        method="post"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="single_form">
                              <input
                                name="name"
                                type="text"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single_form">
                              <input
                                name="email"
                                type="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single_form">
                              <textarea
                                name="message"
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <p className="form-message" />
                          <div className="col-md-12">
                            <div className="single_form">
                              <button className="main-btn pageclip-form__submit">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
