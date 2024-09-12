import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intro from "./pages/intro/intro";
import WebCh2 from "./pages/web-ch2/web-ch2";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/webch2" element={<WebCh2 />} />
      </Routes>
    </Router>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);
