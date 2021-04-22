import React from "react";
import "../styles/AboutMe.css";
import author from "../images/i-sq.jpg";
import { Animated } from "react-animated-css";

const txtAboutme = "</ ABOUT ME>";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 ">
          <Animated
            animationIn="fadeInRight"
            animationOut="bounceOutLeft"
            animationInDuration={2000}
            animationOutDuration={2000}
            isVisible={true}
          >
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author..." />
            </div>
          </Animated>
        </div>
        <div className="col-lg-6 ">
          <Animated
            animationIn="fadeInLeft"
            animationOut="bounceOutLeft"
            animationInDuration={2000}
            animationOutDuration={2000}
            isVisible={true}
          >
            <h1 className="about-heading">{txtAboutme}</h1>
            <p>
              Hi ✋ , I am Tiva. I have been developing websites for over 5
              years. I'm Full-Stack Web Developer. Technologies I use is
              MERN(MongoDB, Express, ReactJS and NodeJS).
            </p>
            <p>
              I create responsive websites that are displayed on all devices
              desktops and smartphones.
            </p>
            <p>
              Of course, before I begin developing any webapp, Landing Page,
              Business Website or E-commerce, I need to have a ready-made
              project layout (sketch).
            </p>
            <p>
              And I’m ready to do this for you, before we start developing your
              website, we will discuss all the details of your niche with you, I
              will conduct a survey of your competitors and make a list of their
              advantages and weaknesses.
            </p>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
