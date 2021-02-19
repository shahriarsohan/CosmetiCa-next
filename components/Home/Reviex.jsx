import React from "react";

const Review = () => {
  return (
    <div className="container pt-115 pb-120">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center pb-25">
            <h5 className="sub_title">Testimonials</h5>
            <h4 className="main_title">People wrote about us</h4>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      <div className="d-flex row justify-content-center">
        <div className="reviewcard m-3 review-area-left col-md-3">
          <div className="propicbox">
            <img
              src="https://preview.checchiadesign.com/code/reviewcard/img/foto.jpg"
              className="propic"
            />
          </div>
          <div className="reviewerbox">
            <h1 className="title-h1">
              <a
                href="https://www.facebook.com/checchiadesign/"
                className="reviewername a-tag"
                target="_blank"
              >
                Simone Checchia
              </a>{" "}
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
              />{" "}
              recommends{" "}
              <a href="https://www.checchiadesign.com/" target="_blank">
                checchiadesign
              </a>
            </h1>
          </div>
          <p className="review">
            Lorem ipsum dolor sit amet, cu pertinax nominati sea, id iriure
            utamur interpretaris sea, vix ne latine aliquam complectitur. Enim
            quas his no, mea ferri audire rationibus ei.
          </p>
          <p className="bottomText">
            Show the{" "}
            <a href="#" target="_blank">
              review on Facebook
            </a>
          </p>
        </div>
        <div className="reviewcard m-3 review-area-right col-md-3">
          <div className="propicbox">
            <img
              src="https://preview.checchiadesign.com/code/reviewcard/img/foto.jpg"
              className="propic"
            />
          </div>
          <div className="reviewerbox">
            <h1 className="title-h1">
              <a
                href="https://www.facebook.com/checchiadesign/"
                className="reviewername a-tag"
                target="_blank"
              >
                Simone Checchia
              </a>{" "}
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
              />{" "}
              recommends{" "}
              <a href="https://www.checchiadesign.com/" target="_blank">
                checchiadesign
              </a>
            </h1>
          </div>
          <p className="review">
            Lorem ipsum dolor sit amet, cu pertinax nominati sea, id iriure
            utamur interpretaris sea, vix ne latine aliquam complectitur. Enim
            quas his no, mea ferri audire rationibus ei.
          </p>
          <p className="bottomText">
            Show the{" "}
            <a href="#" target="_blank">
              review on Facebook
            </a>
          </p>
        </div>
        <div className="reviewcard m-3 review-area-left col-md-3">
          <div className="propicbox">
            <img
              src="https://preview.checchiadesign.com/code/reviewcard/img/foto.jpg"
              className="propic"
            />
          </div>
          <div className="reviewerbox">
            <h1 className="title-h1">
              <a
                href="https://www.facebook.com/checchiadesign/"
                className="reviewername a-tag"
                target="_blank"
              >
                Simone Checchia
              </a>{" "}
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
              />{" "}
              recommends{" "}
              <a href="https://www.checchiadesign.com/" target="_blank">
                checchiadesign
              </a>
            </h1>
          </div>
          <p className="review">
            Lorem ipsum dolor sit amet, cu pertinax nominati sea, id iriure
            utamur interpretaris sea, vix ne latine aliquam complectitur. Enim
            quas his no, mea ferri audire rationibus ei.
          </p>
          <p className="bottomText">
            Show the{" "}
            <a href="#" target="_blank">
              review on Facebook
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
