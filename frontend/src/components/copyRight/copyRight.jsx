import React from "react";
import "./copyRight.css";

import { MdBadge, MdPhone, MdEmail } from "react-icons/md";
const CopyRight = () => {
  return (
    <div>
      <div id="footer">
        <div className="info-container">
          <div>
            <MdBadge className="icon" />
            <h5>담당부서</h5>
            <p>학과 사무실</p>
          </div>
          <div>
            <MdPhone className="icon" />
            <h5>전화번호</h5>
            <p>02-3399-1804, 02-3399-1568</p>
          </div>
          <div>
            <MdEmail className="icon" />
            <h5>이메일</h5>
            <p>ai@syu.ac.kr, it@syu.ac.kr</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        2022 SAHMYOOK UNIVERSITY. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};
export default CopyRight;
