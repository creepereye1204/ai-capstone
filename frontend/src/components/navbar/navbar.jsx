import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <nav>
      <div>
      <img src="https://www.syu.ac.kr/aice/wp-content/themes/syu-hakbu/images/logo/logo_w.png" alt="Logo" />
      <Link to="/" className='Link'>인공지능융합학부</Link>
      </div>
      
      <div>
        <Link to="/about" className={location === '/about' ? 'onClicked' : 'Link'}>
          학부소개
        </Link>
        <Link to="/track" className={location === '/track' ? 'onClicked' : 'Link'} id="track">
          교육과정
        </Link>
        <Link to="/guide" className={location === '/guide' ? 'onClicked' : 'Link'} id="guide">
          학사가이드
        </Link>
        <Link to="/community" className={location === '/community' ? 'onClicked' : 'Link'} id="community">
          커뮤니티
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
