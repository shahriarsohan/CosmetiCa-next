import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/hello", { email });
      setState("SUCCESS");
    } catch (e) {
      // console.log(e);
      setErrorMessage(e);
      setState("ERROR");
    }
  };

  console.log(errorMessage);
  return (
    <footer id="footer" className="footer_area">
      <div className="container">
        <div className="footer_widget pt-70 pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="footer_about mt-50">
                <div className="footer_logo">
                  <Link href="/">
                    <img
                      src="https://cosmetica-s3.s3.ap-south-1.amazonaws.com/ui/footer-new-logo.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="footer_content">
                  <p>Providing services with honesty since 2011</p>
                </div>
              </div>{" "}
              {/* footer about */}
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer_link_wrapper d-flex flex-wrap justify-content-center">
                <div className="footer_link mt-50">
                  <h2
                    style={{ color: "#f94f4f" }}
                    className="footer_title text-center"
                  >
                    Quick Links
                  </h2>
                  <ul className="link d-flex justify-content-center">
                    <li>
                      <Link href="#">Company</Link>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer_link mt-50">
                  <h2
                    style={{ color: "#f94f4f" }}
                    className="footer_title text-center"
                  >
                    Resources
                  </h2>
                  <ul className="link">
                    <li>
                      <Link href="/contact">Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer_subscribe mt-50">
                <h2 style={{ color: "#f94f4f" }} className="footer_title">
                  Newsletter
                </h2>
                <div className="subscribe_form text-right">
                  {/* <form action="#"> */}
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter email"
                  />
                  <button onClick={subscribe} className="main-btn">
                    Subscribe
                  </button>
                  {/* </form> */}
                </div>
                {errorMessage ? (
                  <p className="text-center text-danger">
                    Error! Something went wrong
                  </p>
                ) : (
                  ""
                )}
                {state === "SUCCESS" ? (
                  <p className="text-center text-success">Successful!</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="footer_copyright d-sm-flex justify-content-between">
          <div className="footer_social text-center">
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/cosmetica.dhaka">
                  <i className="lni lni-facebook-filled" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/cosmetica.dhaka/">
                  <i className="lni lni-instagram-original" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* footer social */}
          <div className="footer_copyright_content  text-center">
            Made with <span style={{ color: "#e25555" }}>&#9829;</span> in Dhaka
          </div>{" "}
          {/* footer copyright content */}
        </div>{" "}
        {/* footer copyright */}
      </div>{" "}
      {/* container */}
    </footer>
  );
};

export default Footer;
