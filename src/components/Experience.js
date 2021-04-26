import React from "react";
import "../styles/Experience.css";
import logi3 from "../images/i3GATEWAY.png";
import { Animated } from "react-animated-css";

const txtExperience = "</ Experience>";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1 className="txtExp">{txtExperience}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="imgi3" src={logi3} alt="logoi3..." />
          </div>
          <div className="col">
            <h3>April 2021 - June 2021</h3>
            <p>i3 GATEWAY CO.,LTD</p>
            <p>Mobile Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
