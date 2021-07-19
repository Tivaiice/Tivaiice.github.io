import React from "react";
import "../styles/Experience.css";
import logi3 from "../images/i3GATEWAY.png";
import magicBox from "../images/magicbox.png"
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const txtExperience = "</ EXPERIENCE>";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <Flip bottom>
          <h1 className="txtExp">{txtExperience}</h1>
        </Flip>
      </div>
      <div className="showi3">
        <Fade left>
          <div className="d-flex justify-content-center my-5">
            <img className="imgi3" src={logi3} alt="logoi3..." />
            <p>
              <a className="textDate">April 2020 - June 2020</a> <br />
              <a className="textWork">i3 GATEWAY CO.,LTD</a> <br />
              INTERNSHIP
              <br />
              <a className="textV">(</a> Mobile Developer<a className="textV">)</a>
            </p>
          </div>
        </Fade>
      </div>
      <div className="showi3">
        <Fade left>
          <div className="d-flex justify-content-center my-5">
            <img className="imgMagicBox" src={magicBox} alt="logoi3..." />
            <p>
              <a className="textDate">June 2021 - Present</a> <br />
              <a className="textWork">Magic Box Asia Co., Ltd.</a> <br />
              <a className="textV">(</a> Mobile Developer<a className="textV">)</a>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Experience;
