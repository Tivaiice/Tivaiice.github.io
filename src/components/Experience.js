import React from "react";
import "../styles/Experience.css";
import logi3 from "../images/i3GATEWAY.png";
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
              <a className="textDate">April 2021 - June 2021</a> <br />
              i3 GATEWAY CO.,LTD
              <a className="textV">(</a> Mobile Developer
              <a className="textV">)</a>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Experience;
