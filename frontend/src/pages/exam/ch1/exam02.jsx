import React from "react";
import { Link } from "react-router-dom";
import "./exam02.css";
import Navbar from "../../../components/navbar/navbar";
import CopyRight from "../../../components/copyRight/copyRight";
import { FaCircle } from 'react-icons/fa';
import { MdHome } from "react-icons/md";
const Exam02=()=>{
    return (
        <div id="main-container">
        <div id="header-container">
        <Navbar/>

        <h1>Division of<br/>
        Artificial Intelligence Convergence</h1>
        <p>4차 산업혁명시대, 창의적 융합 인재를 양성</p>
        

        
        
        
        
        
            
        


        
        
        
            
            
        </div>
        <div id="card">
            <MdHome className="home-icon"/>
            
            <Link to="/" className="item">Home</Link>       
            <FaCircle className="dot-icon"/>
            <Link to="/" className="item">학부소개</Link>  
            <FaCircle className="dot-icon"/>
            <Link to="/" className="item">학부소개</Link>       
        </div>
        <h2 id="sub-title">학부소개</h2>
        <div id="middle-cotainer"></div>
        </div>
    );
};

export default Exam02;