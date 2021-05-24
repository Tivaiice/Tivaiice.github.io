import React from "react";
import "../styles/AboutMe.css";
import author from "../images/i-sq.jpg";
// import { Animated } from "react-animated-css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const txtAboutme = "</ ABOUT ME>";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme">
      <Flip top>
        <h1 className="d-flex justify-content-center about-heading ">
          {txtAboutme}
        </h1>
      </Flip>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="photo-wrap mb-5">
              <Fade left>
                <img className="profile-img" src={author} alt="author..." />
              </Fade>
            </div>
          </div>
          <div className="col-lg-6 ">
            <Fade right>
              <p className="about-details1">
                Hi ✋ , I am Tiva Wongratkatanyoo, <br />
                I'm interested in <a className="textSE">
                  Mobile Developer
                </a>, <br />
                I'm Graduate from{" "}
                <a className="textSE">
                  Kasetsart University
                  <br /> Sriracha Campus.
                </a>
                <br />
              </p>
              <p>
                I'm passionate about learning new things and quickly learning
                new technologies. My passion for software lies with dreaming up
                ideas and making them come true with elegant interfaces. I take
                grate care in the experience and code quality of the things I
                build.
              </p>
              <p></p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
