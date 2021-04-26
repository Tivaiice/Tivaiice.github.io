import React from "react";
import logo from "../images/logoweb2.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link smooth={true} to="home" className="navbar-brand" href="#">
          <img src={logo} className="logo" alt="logo..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#FFFFFF" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="about"
                offset={-90}
                className="nav-link"
                href="#"
              >
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="education"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="skills"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="project"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//test
