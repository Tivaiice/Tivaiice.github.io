import React from "react";
import "../styles/Footer.css";
import {
  ArrowRight,
  Facebook,
  Github,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>City Samutparkarn., Office</p>
            </div>
            <div className="d-flex">
              <a href="tel:081-8354412">+66(08)1-835-4412</a>
            </div>
            <div className="d-flex">
              <p>tiva.wongrat@gmail.com</p>
            </div>
          </div>
          <div classNam="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">Education</a>
                <br />
                <a className="footer-nav">Experience</a>
              </div>
              <div className="col">
                <a className="footer-nav">Skills</a>
                <br />
                <a className="footer-nav">Project</a>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/tivaicewong">
                <Facebook className="mx-3" color="#3b5998" size={36} />
              </a>
              <a href="https://www.linkedin.com/in/tiva-wong">
                <Linkedin className="mx-3" color="#0077b5" size={36} />
              </a>
              <a href="https://github.com/Tivaiice">
                <Github className="mx-3" color="#00405d" size={36} />
              </a>
              <a href="https://www.youtube.com/channel/UCeajNI58NWdffaDZRHQPK2A">
                <Youtube className="mx-3" color="#cd201f" size={36} />
              </a>
            </div>
            <p className="pt-3 text-center">
              Copyright &copy;{new Date().getFullYear()}&nbsp; | All Right
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
