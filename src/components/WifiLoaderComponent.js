import React from "react";
import "../styles/Loading.css";
import { WifiLoader } from "react-awesome-loaders";

const WifiLoaderComponent = () => {
  return (
    <>
      <div id="wifi" className="justify-content-center Loading">
        <WifiLoader
          background={"transparent"}
          desktopSize={"250px"}
          mobileSize={"150px"}
          text={""}
          backColor="#E8F2FC"
          frontColor="#3444f1"
        />
      </div>
    </>
  );
};
export default WifiLoaderComponent;
