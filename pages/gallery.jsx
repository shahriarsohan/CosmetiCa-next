import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Home/Footer";

import ImageZoom from "react-medium-image-zoom";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <section className="gallery" id="portafolio">
          <div className="contenedor">
            <h2 className="subtitulo">Galería</h2>
            <div className="contenedor-galeria">
              <ImageZoom
                image={{
                  src:
                    "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                  alt: "Golden Gate Bridge",
                  className: "img-galeria show showImage",
                }}
                zoomImage={{
                  src: "bridge-big.jpg",
                  alt: "Golden Gate Bridge",
                }}
              />
              <ImageZoom
                image={{
                  src:
                    "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                  alt: "Golden Gate Bridge",
                  className: "img-galeria show showImage",
                }}
                zoomImage={{
                  src: "bridge-big.jpg",
                  alt: "Golden Gate Bridge",
                }}
              />
              <ImageZoom
                image={{
                  src:
                    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  alt: "Golden Gate Bridge",
                  className: "img-galeria show showImage",
                }}
                zoomImage={{
                  src: "bridge-big.jpg",
                  alt: "Golden Gate Bridge",
                }}
              />

              <img
                src="https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria show showImage"
              />
              <img
                src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="img-galeria"
              />
              <img
                src="https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria"
              />
              <img
                src="https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria"
              />
              <img
                src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria"
              />
              <img
                src="https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria"
              />
              <img
                src="https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria"
              />
              <img
                src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria"
              />
              <img
                src="https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img-galeria"
              />
            </div>
          </div>
        </section>
        <section className="imagen-light">
          <i className="fas fa-times close" />
          <img src="./img/img-3.jpg" alt="" className="agregar-imagen" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
