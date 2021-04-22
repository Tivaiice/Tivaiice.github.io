import React from "react";
import "../styles/Education.css";
import logoLasalle from "../images/logolasalle.png";
import logokusrc from "../images/logokusrc.png";
import { Animated } from "react-animated-css";

const edu = "</ Education>";

const Education = () => {
  return (
    <div className="education">
      <h1 className="py-5">{edu}</h1>
      <div className="container">
        <Animated
          animationIn="fadeInRight"
          animationOut="bounceOutRight"
          animationInDuration={1500}
          animationOutDuration={2000}
          isVisible={true}
        >
          <div className="row">
            <div className="col">
              <img
                className="piclasalle"
                src={logokusrc}
                alt="logoLasalle..."
              />
            </div>
            <div className="col-6">
              <h3>Kasetsart University Sriracha Campus</h3>
              <p className="NameDetailShool">
                Bachelor of Engineering (B.Eng.), Computer Engineering
              </p>
            </div>
            <div className="col">
              <p className="txttime">
                2016 - 2020<br></br>
                GPAX : 2.30
              </p>
            </div>
          </div>
        </Animated>
        {/* - */}
        <Animated
          animationIn="fadeInLeft"
          animationOut="shake"
          animationInDuration={1500}
          animationOutDuration={1000}
          isVisible={true}
        >
          <div className="row">
            <div className="col">
              <img
                className="piclasalle"
                src={logoLasalle}
                alt="logoLasalle..."
              />
            </div>
            <div className="col-6">
              <h3>LaSalle School Collage Bangkok</h3>
              <p className="NameDetailShool">
                High School Mathmaics x Science Program
              </p>
            </div>
            <div className="col">
              <p className="txttime">
                2014 - 2016<br></br>
                GPAX : 3.50
              </p>
            </div>
          </div>
        </Animated>
        {/* - */}
      </div>
    </div>
  );
};

export default Education;
