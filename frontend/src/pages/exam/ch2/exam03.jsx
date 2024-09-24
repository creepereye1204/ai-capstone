import React from "react";
import "./exam03.css"; // CSS 모듈로 import

const Exam03 = () => {
  return (
    <div className="exam03">
      <h1>삼육대학교</h1>
      <b>삼육대학교</b>
      <i>삼육대학교</i>
      <mark>삼육대학교</mark>
      <em>삼육대학교</em>
      <small>삼육대학교</small>
      <del>삼육대학교</del>
      <ins>삼육대학교</ins>
      <sub>삼육대학교</sub>
      <sup>삼육대학교</sup>

      <div>
        <ins>삼육대학교</ins>
        <sub>삼육대학교</sub>
        <sup>삼육대학교</sup>
      </div>

      <section>
        <ins>삼육대학교</ins>
        <sub>삼육대학교</sub>
        <sup>삼육대학교</sup>
      </section>

      <article>
        <ins>삼육대학교</ins>
        <sub>삼육대학교</sub>
        <sup>삼육대학교</sup>
      </article>

      <ul>
        <li>1</li>
        <li>2</li>
      </ul>

      <ul>
        <li>1</li>
        <li>2</li>
      </ul>

      <ol type="I" start="10">
        <li>1</li>
        <li>2</li>
      </ol>

      <ol type="A" start="10">
        <li>1</li>
        <li>2</li>
      </ol>

      <ol type="1" start="11">
        <li>1</li>
        <li>2</li>
        <dl>
          <dt>제목</dt>
          <dd>내용</dd>
        </dl>
        <dl>
          <dt>제목</dt>
          <dd>내용</dd>
        </dl>
      </ol>

      <dl>
        <dt>제목</dt>
        <dd>내용</dd>
        <dt>제목</dt>
        <dd>내용</dd>
        <dt>제목</dt>
        <dd>내용</dd>
        <dt>제목</dt>
        <dd>내용</dd>
      </dl>

      <dl>
        <dt>파이썬</dt>
        <dd>Django</dd>
        <dd>FastAPI</dd>
        <dd>Flask</dd>
        <dd>신입</dd>
        <dt>제목</dt>
        <dd>내용</dd>
        <dt>제목</dt>
        <dd>내용</dd>
        <dt>제목</dt>
        <dd>내용</dd>
      </dl>

      <table className="table" border="1">
        <thead>
          <tr>
            <th>제목1</th>
            <th>제목2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">내용1</td>
            <td>내용2</td>
          </tr>
          <tr>
            <td>내용3</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>합계</td>
            <td>100</td>
          </tr>
        </tfoot>
      </table>

      <table className="table" border="1">
        <thead>
          <tr>
            <th>제목1</th>
            <th>제목2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">내용1</td>
          </tr>
          <tr>
            <td>합계</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <p>s</p>
      <a href="https://ai-capstone.p-e.kr/about">
        <img
          src="https://www.syu.ac.kr/aice/wp-content/themes/syu-hakbu/images/logo/logo_w.png"
          title="ssh login"
          alt="삼육대학교 로고"
          width="40%"
        />
      </a>
      <p>s</p>
      <h4>s</h4>
      <span>s</span>
      <p>d</p>
      <img
        src="https://www.syu.ac.kr/aice/wp-content/themes/syu-hakbu/images/logo/logo_w.png"
        title="ssh login"
        alt="삼육대학교 로고"
        width="100%"
        useMap="#map1"
      />
      <map name="map1">
        <area
          href="https://ai-capstone.p-e.kr/about"
          target="_blank"
          shape="rect"
          coords="0,0,100,50"
        />
      </map>
    </div>
  );
};

export default Exam03;
