import React from "react";
import "../styles/Education.css";

const txtEducation = "</ Education>";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="d-flex justify-content-center my-5">
        <h1>{txtEducation}</h1>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            {/* <img className="piclogo" src={logoLasalle} alt="logokusrc..." /> */}
            <h3>2014 - 2016</h3>
            <h2>LaSalle School Collage Bangkok</h2>
            <p>High School Mathmaics x Science Program</p>
            <p>GPAX : 3.50</p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            {/* <img className="piclogo" src={logokusrc} alt="logokusrc..." /> */}
            <h3>2016 - 2020</h3>
            <h2>Kasetsart University Sriracha Campus</h2>
            <p>Bachelor of Engineering (B.Eng.), Computer Engineering</p>
            <p>GPAX : 2.30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
