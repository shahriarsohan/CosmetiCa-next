import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <section id="pricing" className="pricing_area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-25">
                <h5 className="sub_title">Pricing Plans</h5>
                <h4 className="main_title">Choose Your Plan</h4>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="pricing_menu mt-30 pb-30">
                <ul
                  className="nav justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="active"
                      id="monthly-tab"
                      data-toggle="tab"
                      href="#monthly"
                      role="tab"
                      aria-controls="monthly"
                      aria-selected="true"
                    >
                      Monthly
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="yearly-tab"
                      data-toggle="tab"
                      href="#yearly"
                      role="tab"
                      aria-controls="yearly"
                      aria-selected="false"
                    >
                      Yearly
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* pricing menu */}
              <div className="pricing_content_area">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="monthly"
                    role="tabpanel"
                    aria-labelledby="monthly-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-7 col-sm-9">
                        <div
                          className="single_pricing text-center mt-30 wow fadeInUp"
                          data-wow-duration="0.5s"
                          data-wow-delay="0.5s"
                        >
                          <div className="pricing_title">
                            <h4 className="title">Basic</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={112}
                              height={110}
                              viewBox="0 0 112 110"
                            >
                              <path
                                className="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div className="pricing_content">
                            <span className="pricing_price">$19.00</span>
                            <p>
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores{" "}
                            </p>
                            <a href className="main-btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>{" "}
                        {/* single pricing */}
                      </div>
                      <div className="col-lg-4 col-md-7 col-sm-9">
                        <div
                          className="single_pricing text-center mt-30 active wow fadeInUp"
                          data-wow-duration="0.5s"
                          data-wow-delay="1s"
                        >
                          <div className="pricing_title">
                            <h4 className="title">Standard</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={112}
                              height={110}
                              viewBox="0 0 112 110"
                            >
                              <path
                                className="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div className="pricing_content">
                            <span className="pricing_price">$39.00</span>
                            <p>
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores{" "}
                            </p>
                            <a href className="main-btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>{" "}
                        {/* single pricing */}
                      </div>
                      <div className="col-lg-4 col-md-7 col-sm-9">
                        <div
                          className="single_pricing text-center mt-30 wow fadeInUp"
                          data-wow-duration="0.5s"
                          data-wow-delay="1.5s"
                        >
                          <div className="pricing_title">
                            <h4 className="title">Premium</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={112}
                              height={110}
                              viewBox="0 0 112 110"
                            >
                              <path
                                className="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div className="pricing_content">
                            <span className="pricing_price">$99.00</span>
                            <p>
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores{" "}
                            </p>
                            <a href className="main-btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>{" "}
                        {/* single pricing */}
                      </div>
                    </div>{" "}
                    {/* row */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="yearly"
                    role="tabpanel"
                    aria-labelledby="yearly-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single_pricing text-center mt-30">
                          <div className="pricing_title">
                            <h4 className="title">Basic</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={112}
                              height={110}
                              viewBox="0 0 112 110"
                            >
                              <path
                                className="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div className="pricing_content">
                            <span className="pricing_price">$99.00</span>
                            <p>
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores{" "}
                            </p>
                            <a href className="main-btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>{" "}
                        {/* single pricing */}
                      </div>
                      <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single_pricing text-center mt-30 active">
                          <div className="pricing_title">
                            <h4 className="title">Standard</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={112}
                              height={110}
                              viewBox="0 0 112 110"
                            >
                              <path
                                className="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div className="pricing_content">
                            <span className="pricing_price">$199.00</span>
                            <p>
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores{" "}
                            </p>
                            <a href className="main-btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>{" "}
                        {/* single pricing */}
                      </div>
                      <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single_pricing text-center mt-30">
                          <div className="pricing_title">
                            <h4 className="title">Premium</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={112}
                              height={110}
                              viewBox="0 0 112 110"
                            >
                              <path
                                className="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div className="pricing_content">
                            <span className="pricing_price">$499.00</span>
                            <p>
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores{" "}
                            </p>
                            <a href className="main-btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>{" "}
                        {/* single pricing */}
                      </div>
                    </div>{" "}
                    {/* row */}
                  </div>
                </div>
              </div>{" "}
              {/* pricing menu */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
    );
  }
}
