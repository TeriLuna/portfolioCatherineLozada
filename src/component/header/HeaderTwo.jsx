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
    this.menuTrigger = this.menuTrigger.bind(this);
    this.closeMenuTrigger = this.closeMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  closeMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img
          src="./assets/images/logo/logo-symbol-light.png"
          alt="FrontEnd Dev Catherine Lozada's logo"
        />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img
          src="./assets/images/logo/logo-symbol-dark.png"
          alt="FrontEnd Dev Catherine Lozada's logo"
        />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img
          src="./assets/images/logo/logo-symbol-dark.png"
          alt="FrontEnd Dev Catherine Lozada's logo"
        />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="./assets/images/logo/logo-symbol-light.png"
          alt="FrontEnd Dev Catherine Lozada's logo"
        />
      );
    } else {
      logoUrl = (
        <img
          src="./assets/images/logo/logo-symbol-dark.png"
          alt="FrontEnd Dev Catherine Lozada's logo"
        />
      );
    }
    return (
      <header
        className={`header-area header-style-two header--transparent  ${color}`}
        style={{ background: "#d1d4d7b5" }}
      >
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <Link to="/portfolioCatherineLozada">{logoUrl}</Link>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <ul className="mainmenu">
                <li>
                  <Link to="/portfolioCatherineLozada">Home</Link>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#clients">Clients</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner d-none d-sm-block">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a
                      href={`${val.link}`}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {val.Social}
                    </a>
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
              <span onClick={this.closeMenuTrigger} className="closeTrigger">
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
