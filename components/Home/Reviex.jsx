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
              src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/review-one.jpg"
              className="propic"
              alt="people-talked-about-cosmetica"
            />
          </div>
          <div className="reviewerbox">
            <h1 className="title-h1">
              <a className="reviewername a-tag" target="_blank">
                Hasibul Islam
              </a>{" "}
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
                alt="review-icon"
              />{" "}
              recommends{" "}
              <a
                href="https://www.facebook.com/cosmetica.dhaka/"
                target="_blank"
              >
                Cosmetica
              </a>
            </h1>
          </div>
          <p className="review">
            <br />
            <br />
            Reliable Hair Treatment. Best Wishes for cosmetica
          </p>
        </div>
        <div className="reviewcard m-3 review-area-left col-md-3">
          <div className="propicbox">
            <img
              src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/review-one.jpg"
              className="propic"
              alt="people-talked-about-cosmetica"
            />
          </div>
          <div className="reviewerbox">
            <h1 className="title-h1">
              <a className="reviewername a-tag" target="_blank">
                Hasibul Islam
              </a>{" "}
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
                alt="review-icon"
              />{" "}
              recommends{" "}
              <a
                href="https://www.facebook.com/cosmetica.dhaka/"
                target="_blank"
              >
                Cosmetica
              </a>
            </h1>
          </div>
          <p className="review">
            <br />
            <br />
            Reliable Hair Treatment. Best Wishes for cosmetica
          </p>
        </div>
        <div className="reviewcard m-3 review-area-left col-md-3">
          <div className="propicbox">
            <img
              src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/review-one.jpg"
              className="propic"
              alt="people-talked-about-cosmetica"
            />
          </div>
          <div className="reviewerbox">
            <h1 className="title-h1">
              <a className="reviewername a-tag" target="_blank">
                Hasibul Islam
              </a>{" "}
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
                alt="review-icon"
              />{" "}
              recommends{" "}
              <a
                href="https://www.facebook.com/cosmetica.dhaka/"
                target="_blank"
              >
                Cosmetica
              </a>
            </h1>
          </div>
          <p className="review">
            <br />
            <br />
            Reliable Hair Treatment. Best Wishes for cosmetica
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
