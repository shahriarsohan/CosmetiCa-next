import React, { Component } from "react";
import Link from "next/link";

export default class Footer extends Component {
  render() {
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
                        src="https://cosmetica.com.bd/wp-content/themes/cosmetica/assets/img/custom/footer-new-logo.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="footer_content">
                    <p>Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor</p>
                  </div>
                </div>{" "}
                {/* footer about */}
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="footer_link_wrapper d-flex flex-wrap">
                  <div className="footer_link mt-50">
                    <h2 className="footer_title">Quick Links</h2>
                    <ul className="link">
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
                  </div>{" "}
                  {/* footer link */}
                  <div className="footer_link mt-50">
                    <h2 className="footer_title">Resources</h2>
                    <ul className="link">
                      <li>
                        <Link href="/contact">Support</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* footer link */}
                </div>{" "}
                {/* footer link wrapper */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer_subscribe mt-50">
                  <h2 className="footer_title">Newsletter</h2>
                  <div className="subscribe_form text-right">
                    <form action="#">
                      <input type="text" placeholder="Enter email" />
                      <button className="main-btn">Subscribe</button>
                    </form>
                  </div>
                </div>{" "}
                {/* footer subscribe */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* footer widget */}
          <div className="footer_copyright d-sm-flex justify-content-between">
            <div className="footer_social text-center">
              <ul className="social">
                <li>
                  <a href="https://facebook.com/uideckHQ">
                    <i className="lni lni-facebook-filled" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/uideckHQ">
                    <i className="lni lni-twitter-filled" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/uideckHQ">
                    <i className="lni lni-instagram-original" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-linkedin-original" />
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer social */}
            <div className="footer_copyright_content  text-center">
              <p>
                Designed and Developed by{" "}
                <a href="https://uideck.com" rel="nofollow">
                  UIdeck
                </a>
              </p>
            </div>{" "}
            {/* footer copyright content */}
          </div>{" "}
          {/* footer copyright */}
        </div>{" "}
        {/* container */}
      </footer>
    );
  }
}
