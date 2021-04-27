import React from "react";
import "../styles/Skills.css";
import Flip from "react-reveal/Flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileCode,
  faPaintBrush,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const txtSkills = "</ SKILLS>";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="d-flex justify-content-center my-5">
        <Flip bottom>
          <h1 className="txtExp ">{txtSkills}</h1>
        </Flip>
      </div>
      <div className="container">
        <Fade bottom>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faDesktop}
                    size="2x"
                  />
                </div>
                <h3>LANGUAGES</h3>
                <br />
                <p className="text-left">
                  <li>JavaScript(ES6)</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>BASH</li>
                  <li>XML</li>
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faFileCode}
                    size="2x"
                  />
                </div>

                <h3>FRAMEWORKS</h3>
                <br />
                <p className="text-left">
                  <li>React</li>
                  <li>React Native</li>
                  <li>Styled-Components</li>
                  <li>Bootstrap</li>
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faTools} size="2x" />
                </div>

                <h3>TOOLS</h3>
                <br />
                <p className="text-left">
                  <li>Git & Github</li>
                  <li>Postman</li>
                  <li>Visual Studio Code</li>
                  <li>Android Studio Code</li>
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box ">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPaintBrush}
                    size="2x"
                  />
                </div>
                <h3>Design</h3>
                <br />
                <p className="text-left">
                  <li>Adobe XD</li>
                  <li>Photoshop</li>
                  <li>Canva</li>
                  <li>Figma</li>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Skills;
