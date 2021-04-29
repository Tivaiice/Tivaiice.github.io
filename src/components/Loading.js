import React from "react";
import { WifiLoader } from "react-awesome-loaders";

const Loading = () => {
  return (
    <>
      <WifiLoader
        background={"transparent"}
        desktopSize={"150px"}
        mobileSize={"150px"}
        text={"Welcome to MyWebsite"}
        backColor="#E8F2FC"
        frontColor="#4645F6"
      />
    </>
  );
};
export default Loading;
