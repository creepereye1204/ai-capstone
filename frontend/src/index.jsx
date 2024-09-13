import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intro from "./pages/intro/intro";
import Exam01 from "./pages/exam/ch1/exam01";
import Exam02 from "./pages/exam/ch1/exam02";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="/exam01" element={<Exam01 />} />
        <Route path="/exam02" element={<Exam02 />} />

        <Route path="/about" element={<Exam02 />} />

      </Routes>
    </Router>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);
