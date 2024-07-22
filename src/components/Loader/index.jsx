import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      id="api-loader"
      className="api-loader fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md"
      style={{ display: "none" }}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <PulseLoader color="#ED1B2F" />
      </div>
    </div>
  );
};

Loader.show = () => {
  const elem = document.getElementById("api-loader");
  if (elem) {
    elem.style.display = "block";
  }
};

Loader.hide = () => {
  const elem = document.getElementById("api-loader");
  if (elem) {
    elem.style.display = "none";
  }
};

export default Loader;
