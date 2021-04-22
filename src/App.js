import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enabled: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#16d9e3",
            },
            links: {
              color: "#30c7ec",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 3,
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
    </>
  );
}

export default App;
