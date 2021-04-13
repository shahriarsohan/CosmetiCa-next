import React, { Component } from "react";

import { connect } from "react-redux";

import { I18nProvider, LOCALS } from "../../i18n/index";
import translate from "../../i18n/translate";

class WhySection extends Component {
  render() {
    const { language } = this.props;

    return (
      <I18nProvider locale={language ? LOCALS.ENGLISH : LOCALS.BANGLA}>
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
                    <h5 className="sub_title">{translate("why_we")}</h5>
                    <h4 className="main_title">
                      {translate("why_we_short_des")}
                    </h4>
                  </div>{" "}
                  {/* section title */}
                  <p>{translate("why_we_des")}</p>
                  <ul className="about_list">
                    <li className="d-flex">
                      <div className="about_check">
                        <i className="lni lni-checkmark-circle" />
                      </div>
                      <div className="about_list_content">
                        <p>{translate("trust")}</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="about_check">
                        <i className="lni lni-checkmark-circle" />
                      </div>
                      <div className="about_list_content">
                        <p>{translate("time")}</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="about_check">
                        <i className="lni lni-checkmark-circle" />
                      </div>
                      <div className="about_list_content">
                        <p>{translate("quality")}</p>
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
      </I18nProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.english,
  };
};

export default connect(mapStateToProps)(WhySection);
