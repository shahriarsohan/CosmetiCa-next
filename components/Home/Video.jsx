import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  const onClickOne = () => {
    setOne(!one);
    setTwo(false);
    setThree(false);
    setFour(false);
  };

  const onClickTwo = () => {
    setOne(false);
    setTwo(!two);
    setThree(false);
    setFour(false);
  };

  const onClickThree = () => {
    setOne(false);
    setTwo(false);
    setThree(!three);
    setFour(false);
  };

  const onClickFour = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(!four);
  };

  return (
    <>
      <div className="container  pt-115">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h5 className="sub_title">Gallery</h5>
              <h4 className="main_title">Some of our work</h4>
            </div>{" "}
            {/* section title */}
          </div>
        </div>{" "}
        <div className="video-player">
          <ReactPlayer url="https://youtu.be/j53zVq7PzgU" />
        </div>
      </div>
      <div className="LargeGallery">
        <div className="container view-boston d-flex">
          <div
            onClick={() => onClickOne()}
            className={one ? "panel panel-1 active" : "panel panel-1"}
          >
            <h3>Explore the word</h3>
          </div>
          <div
            onClick={() => onClickTwo()}
            className={two ? "panel panel-2 active" : "panel panel-2"}
          >
            <h3>Beautiful blue sky</h3>
          </div>
          <div
            onClick={() => onClickThree()}
            className={three ? "panel panel-3 active" : "panel panel-3"}
          >
            <h3>Beautiful blue sky</h3>
          </div>
          <div
            onClick={() => onClickFour()}
            className={four ? "panel panel-4 active" : "panel panel-4"}
          >
            <h3>Beautiful blue sky</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
