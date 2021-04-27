import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div class="header-wraper">
      <div class="main-info">
        <h1>
          Hi, There
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            width="80px"
            className="githand"
            alt="..."
          />
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "Hello, I'm Tiva Wongratkatanyoo",
            "I'm interested in Software Engineer",
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
