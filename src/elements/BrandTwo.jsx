import React, { Component } from "react";
import { Roll } from "react-awesome-reveal";

class BrandTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="brand-style-2">
          <Roll cascade triggerOnce>
            <li>
              <img
                src="./assets/images/brand/brand-01.png"
                alt="Andean Horses of Peru'Logo"
              />
            </li>
            <li>
              <img
                src="./assets/images/brand/brand-02.png"
                alt="La Chosita Wellness Center's Logo"
              />
            </li>
            <li>
              <img
                src="./assets/images/brand/brand-03.png"
                alt="Nanasqa Hostel's Logo"
              />
            </li>
            <li>
              <img
                src="./assets/images/brand/brand-05.png"
                alt="Nattylense' Logo"
              />
            </li>
            <li>
              <img
                src="./assets/images/brand/brand-04.png"
                alt="Ramdassdass' Logo"
              />
            </li>
            <li>
              <img
                src="./assets/images/brand/brand-06.png"
                alt="Ramachandra Foundation's Logo"
              />
            </li>
            <li>
              <img
                src="./assets/images/brand/brand-07.png"
                alt="Fcking Brand Me's Logo"
              />
            </li>
          </Roll>
        </ul>
      </React.Fragment>
    );
  }
}
export default BrandTwo;
