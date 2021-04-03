import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import eventify from "../../projects/eventify.png";

const Eventify = () => {
  return (
    <MDBCarouselItem itemId="3">
      <MDBView>
        <img className="d-block w-60" src={eventify} alt="Eventify" />
        <div className="about-project">
          <p className="txt">
            Worked in a group of two to create a React App in two days.
            Targeting people looking for something to do, we mashed up the
            Skiddle events API and the mapbox GL API to create a simple
            map-based app that tells users what is happening around them on that
            day. Completed through a combination of pair-coding and allocating
            independent tasks with Trello.
          </p>
          <p className="stack">Build: HTML | CSS | JavaScript | React</p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://react-events-now.herokuapp.com/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/WDI38-project-2"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">Eventify</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default Eventify;
