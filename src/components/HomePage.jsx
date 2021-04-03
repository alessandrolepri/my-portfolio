import React from 'react' 
import SplitText from "react-pose-text"
import { Link } from "react-router-dom";

import print from '../../images/print.jpg'

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 130,
  },
};

const charPosesTwo = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 100,
  },
};

const HomePage = () => {
  return (
    <section className="homepage" id="hp">
      <img src={print} alt="Alessandro Lepri | Web Developer" width="100%" />
      <div className="containerName">
        <SplitText
          className="name"
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
        >
          Alessandro Lepri
        </SplitText>
      </div>
      <div className="containerTitle">
        <SplitText
          className="nameTwo"
          initialPose="exit"
          pose="enter"
          charPoses={charPosesTwo}
        >
          Front-end Developer
        </SplitText>
      </div>
      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;