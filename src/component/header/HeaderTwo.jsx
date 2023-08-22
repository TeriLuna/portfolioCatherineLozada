import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/TeriLuna" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/catherine-lozada/",
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isSubMenuOpen: false,
    };
    this.menuTrigger = this.menuTrigger.bind(this);
    this.closeMenuTrigger = this.closeMenuTrigger.bind(this);
    this.subMenuTrigger = this.subMenuTrigger.bind(this);
  }

  menuTrigger() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  closeMenuTrigger() {
    this.setState({ isMenuOpen: false });
  }

  subMenuTrigger() {
    this.setState((prevState) => ({
      isSubMenuOpen: !prevState.isSubMenuOpen,
    }));
  }

  render() {
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-dark.png"
          alt="Digital Agency"
        />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-light.png"
          alt="Digital Agency"
        />
      );
    } else {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    }
    return (
      <header
        className={`header-area header-style-two header--transparent ${color}`}
      >
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link to="/">Home</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="#about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner d-none d-sm-block">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
