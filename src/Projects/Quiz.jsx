import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import quiz from "../../images/quiz.png";

const Quiz = () => {
  return (
    <MDBCarouselItem itemId="10">
      <MDBView>
        <img className="d-block w-60" src={quiz} alt="Questionnarie" />
        <div className="about-project">
          <p className="txt">
            We all know that mental wellness is equally important as physical
            well-being. Let;39&s go through a couple a questions to find out how
            you have been doing recently.
          </p>
          <p className="stack">Build: HTML | CSS | JavaScript | Express</p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://questionnarie.herokuapp.com/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/questionnarie"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">Questionnarie</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default Quiz;
