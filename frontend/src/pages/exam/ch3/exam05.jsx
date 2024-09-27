import React from "react";
import styled from "styled-components";
const Main = styled.div`
  * {
    color: blueviolet;
  }
`;
const Exam05 = () => {
  return (
    <Main>
      <h1>CSS Grid</h1>
      <audio controls>
        <source
          src="https://www.w3schools.com/tags/horse.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <video controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Main>
  );
};
export default Exam05;
