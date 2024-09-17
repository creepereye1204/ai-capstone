import React from "react";
import { Link } from "react-router-dom";
import "./exam02.css";
import Navbar from "../../../components/navbar/navbar";
import CopyRight from "../../../components/copyRight/copyRight";
import { FaCircle } from "react-icons/fa";
import { MdHome } from "react-icons/md";
const Exam02 = () => {
  return (
    <div id="main-container">
      <div id="header-container">
        <hr />
        <Navbar />
        <hr />
        <div className="body-container">
          <h1>
            Division of
            <br />
            Artificial Intelligence Convergence
          </h1>
          <p>4차 산업혁명시대, 창의적 융합 인재를 양성</p>
        </div>
      </div>
      <div className="body-container">
        <div id="card">
          <MdHome className="home-icon" />

          <Link to="/" className="item">
            Home
          </Link>
          <FaCircle className="dot-icon" />
          <Link to="/" className="item">
            학부소개
          </Link>
          <FaCircle className="dot-icon" />
          <Link to="/" className="item">
            학부소개
          </Link>
        </div>
        <h2 id="sub-title">학부소개</h2>
        <div id="middle-cotainer">
          <p id="introduce-title">
            패러다임 변화와 인공지능기술을
            <br />
            선도하는 <span id="point-title">글로벌 정보기술학부</span>
          </p>
        </div>

        <div id="footer-container">
          <img
            id="aicen"
            src="https://www.syu.ac.kr/aicen/wp-content/uploads/sites/94/2022/11/ch_ai_3_big.png"
          ></img>
          <div id="tmi">
            정보통신 및 인공지능 기술의 발전은 빠른 변화를 야기하고 있으며 기존
            사고의 틀을 깨는 다양한
            <span id="emerald">&nbsp;창의적 시도</span>를 통하여
            <span id="blue">&nbsp;패러다임의 변화를</span>추구하고있다.
            <p className="spaced">
              이러한 발전과 변화의 추세는 다양한 분야에서 새로운 인공지능 기반의
              정보 기술 도입을 요구하고 있으며, 이를 효율적으로 진행하고
              활용하는 것이 경쟁전략의 핵심으로 자리 잡게 되었다. 또한, 정형,
              비정형 빅데이터 기반 의사결정의 중요성이 급격히 증대됨에 따라 각
              분야의 지능 정보 기술에 대한 전문 지식과 경영적 마인드를 갖춘
              융합형 인재에 대한 수요가 증가되고 있다. 인공지능융합학부에서는
              인공지능 중심의 공학적 전문 역량 함양을 기본으로 인문사회학적
              소양과 경영적 통찰력을 갖춘 전문 인재 양성을 목표로 하고 있다.
            </p>
            <p className="spaced">
              이를 위하여 창의적 사고를 키우기 위한 폭넓은 전공 기초 교육,
              데이터 기반의 지능형 전문 지식 함양을 위한 인공지능, 빅데이터
              중심의 전공 심화 교육, 또한 반도체트랙사업의 선정과 더불어 반도체
              학문의 폭넓은 이해와 응용을 위한 융합형 프로젝트 중심 교육, 글로벌
              역량을 강화하기 위한 연수 프로그램 및 특성화 프로그램의 운영을
              통하여 4차 산업혁명시대에 적합한 창의적 융합 인재를 양성하고자
              한다.
            </p>
          </div>
        </div>
      </div>
      <div id="end-container">
        <card className="mini-card">
          <img src="https://www.syu.ac.kr/aicen/wp-content/uploads/sites/94/2022/11/img_sub_intro_feature1.jpg"></img>
        </card>
        <card className="mini-card">
          <img src="https://www.syu.ac.kr/aicen/wp-content/uploads/sites/94/2022/11/img_sub_intro_feature2.jpg"></img>
        </card>
        <card className="mini-card">
          <img src="https://www.syu.ac.kr/aicen/wp-content/uploads/sites/94/2022/11/img_sub_intro_feature3.jpg"></img>
        </card>
      </div>
    </div>
  );
};

export default Exam02;
