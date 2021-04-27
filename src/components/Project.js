/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Project.css";
import WakekyWay from "../images/Wakekywayweb1.png";
import Modify1 from "../images/Modifyweb1.png";
import Modify2 from "../images/Modifyweb2.png";
import Pokemon1 from "../images/Pokemonweb1.png";
import Pokemon2 from "../images/Pokemonweb2.png";
// import Website from "../images/Website.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import Flip from "react-reveal/Flip";
const txtProject = "</ PROJECT>";

const Project = () => {
  //WakekyWay
  const openPopupboxWakekyWay = () => {
    const content = (
      <>
        <img
          className="project-image-WakekyWayPopupbox"
          src="https://media.giphy.com/media/bwvloUaCoGXBF3ileD/giphy.gif"
          alt="WakekyWay Clone Project..."
        />
        <p>Project AppWakekyWay แอปพลิเคชั่นแจ้งเตือนก่อนถึงที่หมาย</p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Tivaiice/FinalProject_AppWakekyWay")
          }
        >
          https://github.com/Tivaiice/FinalProject_AppWakekyWay
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxConfigWakekyWay = {
    titleBar: {
      enable: true,
      text: "FinalProject AppWakekyWay",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Modify
  const openPopupboxModify = () => {
    const content = (
      <>
        <img
          className="project-image-ModifyPopupbox"
          src={Modify2}
          alt="Modify Clone Project..."
        />
        <p>AppModify โชว์สินค้ารายการแต่งรถ</p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Tivaiice/AppModifyShop")
          }
        >
          https://github.com/Tivaiice/AppModifyShop
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxConfigModify = {
    titleBar: {
      enable: true,
      text: "App Modify",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Pokemon
  const openPopupboxPokemon = () => {
    const content = (
      <>
        <img
          className="project-image-PokemonPopupbox"
          src={Pokemon2}
          alt="Pokemon Clone Project..."
        />
        <p>App Pokemon โชว์รายละเอียดของPokemon</p>
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Tivaiice/Pokemon_Search")
          }
        >
          https://github.com/Tivaiice/Pokemon_Search
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxConfigPokemon = {
    titleBar: {
      enable: true,
      text: "App Pokemon",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Website
  // const openPopupboxWebsite = () => {
  //   const content = (
  //     <>
  //       <img
  //         className="project-image-WebsitePopupbox"
  //         src={Website}
  //         alt="Website Clone Project..."
  //       />
  //       <p>Website</p>
  //       <b>GitHub : </b>
  //       <a
  //         className="hyper-link"
  //         onClick={() =>
  //           window.open("https://github.com/Tivaiice/Pokemon_Search")
  //         }
  //       >
  //         https://github.com/Tivaiice/Pokemon_Search
  //       </a>
  //     </>
  //   );
  //   PopupboxManager.open({ content });
  // };

  // const openPopupboxConfigWebsite = {
  //   titleBar: {
  //     enable: true,
  //     text: "Website",
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500,
  // };

  return (
    <div id="project" className="project-wrapper">
      <div className="container">
        <Flip bottom>
          <h1 className="text-uppercase text-center py-5">{txtProject}</h1>
          <p className="text-uppercase text-left">Mobile</p>
        </Flip>
        <div className="image-box-wrapper row justify-content-center">
          <Flip left>
            <div
              className="project-image-box-WakekyWay"
              onClick={openPopupboxWakekyWay}
            >
              <img
                className="project-image-WakekyWay"
                src={WakekyWay}
                alt="WakekyWay Clone Project..."
              />
              <div className="overflow-WakekyWay"></div>
              <FontAwesomeIcon
                className="project-icon-WW"
                icon={faSearchPlus}
              />
            </div>
          </Flip>
          {/* - */}
          <Flip left>
            <div
              className="project-image-box-Modify"
              onClick={openPopupboxModify}
            >
              <img
                className="project-image-Modify"
                src={Modify1}
                alt="Modify Project..."
              />
              <div className="overflow-Modify"></div>
              <FontAwesomeIcon
                className="project-icon-Modify"
                icon={faSearchPlus}
              />
            </div>
          </Flip>
          {/* - */}
          <Flip left>
            <div
              className="project-image-box-Pokemon"
              onClick={openPopupboxPokemon}
            >
              <img
                className="project-image-Pokemon"
                src={Pokemon1}
                alt="Pokemon Project..."
              />
              <div className="overflow-Pokemon"></div>
              <FontAwesomeIcon
                className="project-icon-Pokemon"
                icon={faSearchPlus}
              />
            </div>
          </Flip>
        </div>
        {/* <Flip bottom>
          <p className="text-uppercase text-left">Website</p>
          <p className="text-center">Coming Soon !</p>
        </Flip> */}
      </div>
      <PopupboxContainer {...openPopupboxConfigWakekyWay} />
      <PopupboxContainer {...openPopupboxConfigModify} />
      <PopupboxContainer {...openPopupboxConfigPokemon} />
      {/* <PopupboxContainer {...openPopupboxConfigWebsite} /> */}
    </div>
  );
};

export default Project;

// <div className="image-box-wrapper row justify-content-center">
//   <div className="project-image-box-Website" onClick={openPopupboxWebsite}>
//     <img
//       className="project-image-Website"
//       src={Website}
//       alt="Website Project..."
//     />
//     <div className="overflow-Website"></div>
//     <FontAwesomeIcon className="project-icon-Website" icon={faSearchPlus} />
//   </div>
// </div>;
