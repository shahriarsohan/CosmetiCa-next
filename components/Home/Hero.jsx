import React, { Component } from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { I18nProvider, LOCALS } from "../../i18n/index";
import translate from "../../i18n/translate";

class Hero extends Component {
  render() {
    return (
      <I18nProvider
        locale={this.props.language ? LOCALS.ENGLISH : LOCALS.BANGLA}
      >
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
                    src="https://cosmetica-bd.s3.ap-south-1.amazonaws.com/assets1/images/hero-img-removebg-preview.png"
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
                    <span>{translate("name")}</span>
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    {translate("hero_desc")}
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
                        href="https://www.facebook.com/cosmetica.dhaka/services/"
                        target="_blank"
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
      </I18nProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.english,
  };
};

export default connect(mapStateToProps)(Hero);
