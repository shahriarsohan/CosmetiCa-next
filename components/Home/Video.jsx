import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import ReactPlayer from "react-player";
import Link from "next/link";

import { connect } from "react-redux";

import { I18nProvider, LOCALS } from "../../i18n/index";
import translate from "../../i18n/translate";

const Video = (props) => {
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
    <I18nProvider locale={props.language ? LOCALS.ENGLISH : LOCALS.BANGLA}>
      <div className="container">
        <div className="pt-115">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-25">
                <h5 className="sub_title">{translate("gallery")}</h5>
                <h4 className="main_title">{translate("work_our")}</h4>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          <div className="video-player player-desing">
            <ReactPlayer
              playIcon="play"
              style={{ borderRadius: "50px" }}
              url="https://youtu.be/j53zVq7PzgU"
            />
          </div>
        </div>
        <div className="LargeGallery">
          <div className="container view-boston d-flex">
            <div
              onClick={() => onClickOne()}
              className={one ? "panel panel-1 active" : "panel panel-1"}
            ></div>
            <div
              onClick={() => onClickTwo()}
              className={two ? "panel panel-2 active" : "panel panel-2"}
            ></div>
            <div
              onClick={() => onClickThree()}
              className={three ? "panel panel-3 active" : "panel panel-3"}
            ></div>
            <div
              onClick={() => onClickFour()}
              className={four ? "panel panel-4 active" : "panel panel-4"}
            ></div>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-115">
          <Link href="/gallery">
            <Button
              color="red"
              content={props.language ? "More" : "আরো"}
              icon="heart"
              label={{
                basic: true,
                color: "red",
                pointing: "left",
                content: "45",
              }}
            />
          </Link>
        </div>
      </div>
    </I18nProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.english,
  };
};

export default connect(mapStateToProps)(Video);
