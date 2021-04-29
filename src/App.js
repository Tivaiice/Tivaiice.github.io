import { useEffect } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      <Loading />;
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Particles
        id="home"
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 75,
              density: {
                enabled: true,
                value_area: 800,
              },
            },
            color: {
              value: "#16d9e3",
            },
            links: {
              color: "#3444f1",
              distance: 200,
              enable: true,
              opacity: 0.85,
              width: 2,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#46aef7",
              },
            },
            move: {
              speed: 3,
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
