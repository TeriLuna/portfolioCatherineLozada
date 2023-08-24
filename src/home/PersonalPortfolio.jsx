import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiCheck } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import HeaderTwo from "../component/header/HeaderTwo";
import FooterTwo from "../component/footer/FooterTwo";
import BrandTwo from "../elements/BrandTwo";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ContactOne from "../elements/contact/ContactOne";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Front-End Developer",
    title: "Hi! I’m <span>Catherine.</span>",
    description:
      "I  have a passion for learning and am always seeking out new challenges to improve my skills.",
    buttonText: "Download my CV",
    buttonLink: "./assets/pdf/Catherine-Lozada-CV.pdf",
  },
];

const Certifications = [
  {
    title: "Software Development - React JS at CoderHouse",
    link: "https://www.coderhouse.com.co/certificados/6284e9ac99c0fe00199cfe1d",
  },
  {
    title: "Software Development - JavaScript at CoderHouse",
    link: "https://www.coderhouse.com.co/certificados/621ab341d9124200544a3fdc",
  },
  {
    title: "Software Development - Web Developer at CoderHouse",
    link: "https://www.coderhouse.com.co/certificados/61ae1148446f700ed8914805",
  },
];
class PersonalPortfolio extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    var namesItemOne = [
      "Full-time and Remote availability",
      "Scrum knowledge",
      "Experience in software development",
      "Positive attitude and desire to improve",
      "Experience in React and Next.js",
      "Strong ability to work independently and self-guided",
      "Proficiency in HTML, CSS and JavaScript",
      "Excellent communication skills and a willingness to collaborate with team members",
    ];
    let title = "My About",
      description =
        "As a highly motivated FrontEnd Developer with over 2 years of experience, I have a passion for learning and am always seeking out new challenges to improve my skills. I am dedicated to producing high-quality work and delivering exceptional results. My expertise in React JS, HTML5, CSS3, JavaScript, and other front-end technologies allows me to create responsive and visually appealing websites that meet client needs.";

    return (
      <Fragment>
        <Helmet pageTitle="Personal Portfolio" />

        <HeaderTwo logo="symbol-dark" color="color-black" />

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide slider_fixed_height slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--teri white-overlay-mobile"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? (
                        <div
                          className=" d-inline-block"
                          style={{
                            background: "#080808de",
                            borderRadius: "5px",
                            paddingRight: "7px",
                            paddingLeft: "7px",
                          }}
                        >
                          <span className="theme-gradient font-900">
                            {value.category}
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      {value.title ? (
                        <h1
                          className="title text-light"
                          dangerouslySetInnerHTML={{ __html: value.title }}
                        ></h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p
                          className="description text-light"
                          dangerouslySetInnerHTML={{
                            __html: value.description,
                          }}
                        ></p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="btn-default"
                            href={`${value.buttonLink}`}
                            download="CatherineLozadaCV"
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="./assets/images/about/about-5.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7" id="about">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <span className="subtitle">Read About Me</span>
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h5 className="title">Certifications</h5>
                          {Certifications.map((certification, index) => (
                            <div className=" mb--30" key={index}>
                              <p className="mb--10">{certification.title}</p>
                              <a
                                className="link im-hover"
                                href={certification.link}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                              >
                                Credential URL
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h5 className="title">Development Skill</h5>
                          <div className=" d-flex">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <p>React JS</p>
                              <p>Next JS</p>
                              <p>Gatsby</p>
                              <p>HTML5</p>
                              <p>CSS3</p>
                              <p>JavaScript</p>
                              <p>JSON</p>
                              <p>AJAX</p>
                              <p>Bootstrap</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <p>Material UI</p>
                              <p>Tailwind</p>
                              <p>SASS</p>
                              <p>Git</p>
                              <p>GitHub</p>
                              <p>Heroku</p>
                              <p>Scrum</p>
                              <p>Trello</p>
                              <p>Email JS</p>
                              <p>Firebase</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Brand Area  */}
        <div className="rn-brand-area pb--120 bg_color--1" id="clients">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--25 mb_sm--0">
                  <span className="subtitle">My Top clients</span>
                  <h2 className="title">Client's Brand</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <BrandTwo branstyle="branstyle--2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}

        {/* Start About Area  */}
        <div className="rn-about-area pb--120 bg_color--1" id="skills">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="./assets/images/about/about-4.png"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner inner">
                  <div className="section-title">
                    <span className="subtitle">My Performance</span>
                    <h2 className="title">My Best Performance</h2>
                    <p>
                      The passion for technology and the desire to be on a
                      continuous learning path have driven me into the world of
                      IT.
                    </p>
                  </div>
                  <div className="accordion-wrapper mt--30">
                    <ul className="list-style--1">
                      {namesItemOne.map((name, index) => {
                        return (
                          <li key={index}>
                            <FiCheck /> {name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="about-button mt--30">
                    <a
                      className="btn-default"
                      href="./assets/pdf/Catherine-Lozada-CV.pdf"
                      download="CatherineLozadaCV"
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      See My CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area pb--60 bg_color--1" id="projects">
          <div className="portfolio-sacousel-inner mb--55 mb_sm--0">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--30 mb_sm--0">
                    <span className="subtitle">Some projects</span>
                    <h2 className="title">Some of My Recent Collaborations</h2>
                    <p className="description">
                      One of the most important things for me is to connect with
                      the essence of the clients,
                      <br /> their projects, their goals, and translate it into
                      a website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area pb--120 bg_color--1" id="contact">
          <ContactOne />
        </div>
        {/* End Portfolio Area */}

        <FooterTwo />

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default PersonalPortfolio;
