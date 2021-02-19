import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact_area pt-70 pb-120">
        <div className="contact_image d-flex align-items-center justify-content-end">
          <div className="image">
            <img
              className="wow fadeInLeftBig"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
              src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/assets/images/contact.svg"
              alt="about"
            />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div
                className="contact_wrapper mt-45 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.9s"
              >
                <div className="section_title pb-15">
                  <h5 className="sub_title">Contact</h5>
                  <h4 className="main_title">Get In Touch</h4>
                  <p>
                    Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
                <div className="contact_form">
                  <form id="contact-form" action="assets/contact.php">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single_form">
                          <input name="name" type="text" placeholder="Name" />
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
                          <button className="main-btn">Submit</button>
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
    );
  }
}
