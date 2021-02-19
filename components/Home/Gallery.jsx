import React, { Component } from "react";

var images = [
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",

  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",

  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
  "https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hero-img-removebg-preview.png",
];

class ImageList extends Component {
  state = {
    images,
    fadedleft: true,
    fadedright: false,
    start: 0,
    finish: 5,
  };
  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 5,
        finish: finish - 5,
      });
    } else {
      this.setState({
        fadedleft: true,
      });
    }
    this.setState({
      fadedright: false,
    });
  }
  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < images.length) {
      this.setState({
        start: start + 5,
        finish: finish + 5,
      });
    } else {
      this.setState({
        fadedright: true,
      });
    }

    this.setState({
      fadedleft: false,
    });
  }
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft
      ? "arrow-left faded-left"
      : "arrow-left";
    const fadedright = this.state.fadedright
      ? "arrow-right faded-right"
      : "arrow-right";
    return (
      <div className="container">
        <div className="slideshow row col-md-12">
          <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
          {this.state.images
            .slice(startindex, finishindex)
            .map((image, imageindex) => {
              return (
                <div key={imageindex}>
                  <img className="gallery-image" src={image} />
                </div>
              );
            })}
          <div
            className={fadedright}
            onClick={this.rightClick.bind(this)}
          ></div>
        </div>
      </div>
    );
  }
}

export default ImageList;
