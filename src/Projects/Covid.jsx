import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import covid from "../../projects/covid19.png";

const Covid19 = () => {
  return (
    <MDBCarouselItem itemId="5">
      <MDBView>
        <img className="d-block w-60" src={covid} alt="COVID-19 Tracker" />
        <div className="about-project">
          <p className="txt">
            During the pandemic about Covid19, I wanted to create a javascript
            table sheet by using an external API render a live data about this
            virus by country based on the number of total cases. This table
            could be implemented by adding filters to give the users the
            possibility to check what they want, re-arrange all the table by
            low-high and vice versa and give more flexibility on how to play
            with those data. At the moment, this project is an only desktop
            version.
          </p>
          <p className="stack">Build: HTML | CSS | JavaScript | API</p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://covid19-checker.herokuapp.com/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/Covid19_tracker"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">Covid-19 Tracker</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default Covid19;
