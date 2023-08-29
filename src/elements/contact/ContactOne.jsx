import React, { Component } from "react";
import FormStyle from "./FormStyle";
import { Slide, Zoom } from "react-awesome-reveal";

class ContactOne extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <Slide cascade triggerOnce>
                  <span className="subtitle">Let's Say Hi</span>
                  <h2 className="title">Hire Me.</h2>
                  <div className="im_address_inner">
                    <div className="im_address">
                      <span>Contact Email:</span>
                      <a
                        className="link im-hover"
                        href="mailto:catherinelozada7@gmail.com"
                      >
                        catherinelozada7@gmail.com
                      </a>
                    </div>
                  </div>
                </Slide>
              </div>
              <FormStyle />
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <Zoom triggerOnce>
                  <img src="./assets/images/about/about-11.jpg" alt="trydo" />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactOne;
