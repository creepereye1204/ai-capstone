import { render } from "react-dom";
import React from "react";
import Intro from "./components/intro/intro";

const Main = () => {
  



  return (
    <div>
      <Intro/>
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);
