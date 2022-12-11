import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const LoaderSquare = () => {
  return (
    <RotatingSquare
      height="100"
      width="100"
      color="#4fa94d"
      // color="orange"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperclassName=""
      visible={true}
    />
  );
};

export default LoaderSquare;
