import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intro from "./pages/intro/intro";
import Exam01 from "./pages/exam/ch1/exam01";
import Exam02 from "./pages/exam/ch1/exam02";
import Exam03 from "./pages/exam/ch2/exam03";
import Exam04 from "./pages/exam/ch2/exam04";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="/exam01" element={<Exam01 />} />
        <Route path="/exam02" element={<Exam02 />} />
        <Route path="/exam03" element={<Exam03 />} />
        <Route path="/exam04" element={<Exam04 />} />
        <Route path="/about" element={<Exam02 />} />
      </Routes>
    </Router>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);
