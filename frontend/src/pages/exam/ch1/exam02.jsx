import React from "react";
import "./exam02.css";
import Navbar from "../../../components/navbar/navbar";
import CopyRight from "../../../components/copyRight/copyRight";

const Exam02=()=>{
    return (
        <div className="header">
        <Navbar/>
        <header>
        <h1>Division of<br/>
        Artificial Intelligence Convergence</h1>
        <p>4차 산업혁명시대, 창의적 융합 인재를 양성</p>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="card">
            
        </div>
        
        
        <div>
            <h3>1. AI, Machine Learning, Deep Learning</h3>
            <p>AI, Machine Learning, Deep Learning은 AI를 이해하고, 제어, ��지, 예��, 학습, 분석, 이해, 추��, 다��기 위한 다��한 학문, 이��, 방법��, 기��, 기법, and tools. </p>
        </div>
            
        
        </header>
        <footer>
            <CopyRight/>
        </footer>
        
        </div>
    );
};

export default Exam02;