import React from "react";
import "../styles/Project.css";
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
          <div className="project-image-box">
            <img
              className="project-image"
              src={Website}
              alt="WakekyWay Project..."
            />
            <div ClassName="overflow"></div>
          </div>
          {/* - */}
          <div className="project-image-box">
            <img
              className="project-image"
              src={Website}
              alt="Modify Project..."
            />
            <div ClassName="overflow"></div>
          </div>
          {/* - */}
          <div className="project-image-box">
            <img
              className="project-image"
              src={Website}
              alt="Pokemon Project..."
            />
            <div ClassName="overflow"></div>
          </div>
          {/* - */}
          <div className="project-image-box">
            <img
              className="project-image"
              src={Website}
              alt="Website Project..."
            />
            <div ClassName="overflow"></div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>
  );
};

export default Project;
