import React, { useState } from "react";

const LargeGallery = () => {
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
  );
};

export default LargeGallery;
