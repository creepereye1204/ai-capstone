import React from "react";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div>
      <p>안녕하세요! 교수님 웹 프로그래밍 2022101483 최지웅 학생입니다!</p>
      <card>
        <div className="card">
          <Link to="/exam01">ch1 실습</Link>
          <p>배운내용:HTML 세팅과 기본 설정</p>
          <small>2024.09.12</small>
        </div>
      </card>
    </div>
  );
};
export default Intro;

/*
https://www.syu.ac.kr/aice/department-introduction/introduction/
*/
