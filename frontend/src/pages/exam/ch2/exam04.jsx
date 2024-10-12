import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import bgMusic from "../../../assets/bg.mp3";
import $ from "jquery";

const AppDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap");
  * {
    font-family: "Nanum Brush Script", cursive;
    font-weight: 400;
    font-style: normal;
  }

  #main {
    height: 100vh;
    background-color: aliceblue;
  }
  text-align: center;
  width: 100%;
  margin: 20px auto;
  table {
    font-weight: bolder;
    font-size: 15px;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  th,
  td {
    padding: 15px;
    text-align: center;
    border: 3px solid #ccc;
    transition: all 0.3s ease;
  }

  th {
    background-color: gray;
  }

  td:hover {
    background-color: gray;
    font-size: 20pt;
    transform: scale(1.2);
    border-radius: 0.5em;
  }

  h1 {
    color: blueviolet;
  }
`;

const Exam04 = () => {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Play failed:", error);
      });
    }
  };

  useEffect(() => {
    $("td").on("mouseenter", playMusic);

    return () => {
      $("td").off("mouseenter", playMusic);
    };
  }, []);

  return (
    <AppDiv>
      <div id="main">
        <img
          src="https://www.syu.ac.kr/wp-content/uploads/2018/05/pg_logo3.png"
          alt="Logo"
        />
        <h1>2학기 시간표</h1>
        <audio ref={audioRef} src={bgMusic} type="audio/mpeg"></audio>

        <table>
          <thead>
            <tr>
              <th>교시</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
              <th>일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1교시</td>
              <td></td>
              <td rowSpan={3}>컴퓨터비전</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2교시</td>
              <td rowSpan={3}>데이터 사이언스 응용</td>
              <td>채플</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3교시</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4교시</td>
              <td></td>
              <td rowSpan={3}>딥러닝 응용</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5교시</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6교시</td>
              <td rowSpan={3}>세계문화와 종교</td>
              <td rowSpan={3}>데이터베이스 실습</td>
              <td rowSpan={3}>웹프로그래밍</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7교시</td>
              <td rowSpan={3}>예비부모 교육</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8교시</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9교시</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10교시</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11교시</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12교시</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>13교시</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppDiv>
  );
};

export default Exam04;
