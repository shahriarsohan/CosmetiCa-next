import React, { Component } from "react";

export default class OurWorks extends Component {
  render() {
    return (
      <section id="work" className="work_area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <div className="section_title text-center pb-25">
                <h5 className="sub_title">
                  You are using free lite version of Plain
                </h5>
                <h4 className="main_title">
                  Please purchase full version to get all pages, features and
                  permission to remove footer credits.
                </h4>
              </div>{" "}
              {/* section title */}
              <a
                className="main-btn"
                href="https://rebrand.ly/plain-ud"
                rel="nofollow"
              >
                Purchase Now
              </a>
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
    );
  }
}
