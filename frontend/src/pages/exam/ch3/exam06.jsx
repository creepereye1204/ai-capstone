import React from "react";
import styled from "styled-components";
const Style = styled.div`
  * {
    color: blue;
  }
  h1 {
    background-color: yellow;
  }
  /* 주석 */
  .redtxt {
    color: red;
  }
  .greentxt {
    background-color: green;
  }
  ol li {
    background-color: aqua;
  }
  ul li {
    font-size: 40px;
  }
  a:link {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
    font-weight: bolder;
    text-decoration: none;
  }
  a:active {
    color: green;
    font-size: 120px;
    text-decoration: none;
  }
  a:hover {
    color: red;
    text-decoration: none;
  }
  /* a:link~a:hover 순서 잘지킬것! */
  .blue-background {
    background-color: blue;
  }
  /*항상 아래 스타일부터 적용*/
`;
const Exam06 = () => {
  return (
    <Style>
      <h1 class="redtxt">백그라운드 엘로우</h1>
      <p>CSS 분리</p>
      <h1>백그라운드 엘로우</h1>
      <h1>백그라운드 엘로우</h1>
      <h2>백그라운드 엘로우</h2>
      <p>CSS 분리</p>
      <h1 class="redtxt">백그라운드 엘로우</h1>
      <p>CSS 분리</p>
      <ul>
        <li class="redtxt blue-background">HTML</li>
        <li>CSS</li>
      </ul>
      <ul>
        <li class="greentxt">HTML</li>
        <li>CSS</li>
      </ul>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
      <a href="https://www.syu.ac.kr">삼육대학교</a>
      <br></br>
      <a href="https://www.naver.com/">네이버</a>
    </Style>
  );
};
export default Exam06;
