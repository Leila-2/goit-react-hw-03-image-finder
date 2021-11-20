import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function LoaderComponent(props) {
  return (
    <Loader
      type="Circles"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={3000} //3 secs
      className="Loader"
    />
  );
}
