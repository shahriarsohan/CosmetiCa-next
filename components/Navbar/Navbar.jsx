import React, { Component } from "react";
import Link from "next/link";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";

import { connect } from "react-redux";
import { changeLanguage } from "../../store/actions";

import { I18nProvider, LOCALS } from "../../i18n/index";
import translate from "../../i18n/translate";

class Navbarr extends Component {
  handleClick = () => {
    this.props.changeLanguage();
  };

  render() {
    const { language } = this.props;
    return (
      <I18nProvider
        locale={this.props.language ? LOCALS.ENGLISH : LOCALS.BANGLA}
      >
        <div className="header_navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link href="/" className="navbar-brand">
                    <img
                      src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/cosmetica-logo.png"
                      alt="Logo"
                    />
                  </Link>
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
                          {language ? "Home" : "হোম"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/about">
                          {language ? "About" : "সম্পর্কে"}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="page-scroll" href="/service">
                          {language ? "Service" : "সেবা"}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="page-scroll" href="/contact">
                          {language ? "Contact" : "যোগাযোগ"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Button onClick={this.handleClick} icon>
                          <Icon
                            color={this.props.language ? "red" : "green"}
                            name="world"
                          />{" "}
                          {"   "}
                          {this.props.language ? "EN" : "BD"}
                        </Button>
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
      </I18nProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.english,
  };
};

export default connect(mapStateToProps, {
  changeLanguage,
})(Navbarr);
