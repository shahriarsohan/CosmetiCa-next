import React from "react";
import Image from "next/image";

import NavBar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container about pt-115 pb-120">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h5 className="sub_title">Cosmetica</h5>
              <h4 className="main_title">More About Us</h4>
            </div>{" "}
            {/* section title */}
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-xs-12 col-lg-7 col-md-7 col-sm-7">
            <div className="section_title pb-25">
              <h5 className="sub_title">Why Cosmetica Started?</h5>
              {/* section title */}
            </div>
            <p className="about-text">
              Hair loss is a major cause of distress in many men who experience
              it. It is quite easy to say, “Just shave it off” but for many of
              us this may not be an option. There are now so many companies out
              their all claiming to be the best or provide the best services and
              for many of us who are experiencing hair loss, thinning or
              alopecia etc, it can all become very overwhelming along with
              deciding which is the best solution for you. Cosmetica has found
              the solution that will allow you to get back your full head of
              hair without having to undergo any painful surgeries or taking
              medications that can cause long-term side effects. We have patent
              technology and materials that will allow us to design a truly
              natural and undetectable hair system which will integrate with
              your own hair, blend perfectly and be unnoticeable by sight and
              touch.
            </p>
            <div className="section_title pt-5 pb-25">
              <h5 className="sub_title">Hair replacement studio</h5>
            </div>
            <p>
              COSMETICA Hair Replacement Studio: House-01, Road-04, Block-A,
              Section-10, Mirpur, Dhaka (jus opposite of th popular hospital,
              near BenaroshiPalli gate no. 2) 2 min walking distance from 10
              number circle)
            </p>
            <br />
            <br />
            <p>
              We have created a place where we want you to feel completely at
              home with a relaxing and laid back environment and an ATTITUDE
              FREE ZONE.
            </p>
            <br />
            <br />
            <div className="list-offer">
              <p>
                The following services are all carried out in your very own
                private rooms. Discretion and complete privacy is assured.
              </p>
              <ul className="p-5">
                <li>Consultations</li>
                <li>Fittings</li>
                <li>Maintenance & Servicing of your hair system</li>
                <li>In House Repairs and adjustments</li>
                <li>Trims and Cuts of your own hair and hair systems.</li>
                <li>And much more</li>
              </ul>
              <div className="another-offering">
                <p>
                  We also offer the following whilst getting your hair system
                  Fitted, Serviced and aintained, just because we love to spoil
                  our clients:-
                </p>
                <ul className="p-5">
                  <li>Free Drinks and Snacks</li>
                  <li>Free Internet Connection</li>
                  <li>Free Mobile Charging</li>

                  <li>And much more</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-5 col-md-5 col-sm-12">
            <div className="about-image justify-content-center align-items-center">
              <Image
                width="500"
                height="500"
                src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/vaia.jpg"
                alt="cosmetia-consultant"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="stylist-area">
              <div className="section_title text-center pt-5 pb-25">
                <h5 className="sub_title">Our stylist</h5>
              </div>
              <p>
                There are TWO major factors involved in making a hair system
                truly undetectable. The first being the way it is made and the
                second is the way in which it is cut and styled.
              </p>
              <br />
              <p>
                Our stylists are extremely well qualified with bags of
                experience not only by working in top end hair salons but also
                working within theatre, wig making and with over 6 years
                experience in hair replacement clinics. These skills are
                essential in understanding how to cut in a hair system and
                perfectly blending it in with your own existing hair.
              </p>
              <br />
              <p>
                Our Stylists are very passionate about what they do and ensure
                you leave the clinic feeling amazed at your new transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
