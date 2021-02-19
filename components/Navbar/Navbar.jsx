import React, { Component } from "react";
import Link from "next/link";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

export default class Navbarr extends Component {
  render() {
    return (
      <div className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img
                    src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/assets/images/logo.svg"
                    alt="Logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="page-scroll" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="page-scroll" href="/about">
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="page-scroll" href="/service">
                        Service
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href="#blog">
                        Blog
                      </a>
                    </li>

                    <li className="nav-item">
                      <Link className="page-scroll" href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>{" "}
                {/* navbar collapse */}
              </nav>{" "}
              {/* navbar */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </div>
    );
  }
}
