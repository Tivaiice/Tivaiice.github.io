import React from "react";
import WakekyWay from "../images/WakekyWay.png";
import Modify from "../images/Modify.png";
import Pokemon from "../images/Pokemon.png";
import Website from "../images/Website.png";

const txtProject = "</ PROJECT>";

const Project = () => {
  return (
    <div className="project-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">{txtProject}</h1>
        <div className="image-box-wrapper row justify-content-center">
          <img
            className="project-image"
            src={WakekyWay}
            alt="WakekyWay Project..."
          />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center">
          <img className="project-image" src={Modify} alt="Modify Project..." />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center">
          <img
            className="project-image"
            src={Pokemon}
            alt="Pokemon Project..."
          />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center">
          <img
            className="project-image"
            src={Website}
            alt="Website Project..."
          />
        </div>
        {/* - */}
      </div>
    </div>
  );
};

export default Project;
