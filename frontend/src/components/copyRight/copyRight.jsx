import React from "react";
import "./copyRight.css";
import { FaCircle } from "react-icons/fa";
import { MdBadge } from "react-icons/md";
const CopyRight = () => {
  return (
    <div>
      <div id="footer">
        <div className="info-container">
          <MdBadge className="icon" />
          <h5>담당부서</h5>
          <p>IT</p>
        </div>
      </div>
      <div className="copyright">
        2022 SAHMYOOK UNIVERSITY. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};
export default CopyRight;
