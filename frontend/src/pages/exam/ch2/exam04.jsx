import React from "react";
import styled from "styled-components";

const AppDiv = styled.div`
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
  }

  th {
    background-color: gray;
  }

  h1 {
    color: blueviolet;
  }
`;

const Exam04 = () => {
  return (
    <AppDiv>
      <h1>2학기 시간표</h1>
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
    </AppDiv>
  );
};

export default Exam04;
