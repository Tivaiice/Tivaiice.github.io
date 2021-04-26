import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div class="header-wraper">
      <div class="main-info">
        <h1>My Website ~</h1>
        <Typed
          className="typed-text"
          strings={[
            "Hello, I'm Tiva Wongratkatanyoo",
            "I'm interested in Full-Stack devloper",
            "I'm Graduate from Kasetsart University Sriracha Campus",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="contact" smooth={true} href="#" className="btn-main-offer">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
