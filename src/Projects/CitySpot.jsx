import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import cityspot from "../../projects/city-spot.png";

const CitySpot = () => {
  return (
    <MDBCarouselItem itemId="2">
      <MDBView>
        <img className="d-block w-60" src={cityspot} alt="City Spot" />
        <div className="about-project">
          <p className="txt">
            This group project aimed to develop a full-stack React/Express app
            with a NoSQL database. City Spot is a web application combining five
            different APIs. After signing up and create their own account, users
            can post photos of the places they visited, and they can also
            comment on other travellers pictures. There is a space to interact
            with the City Spot Community and posting the best spots from a city.
            We split the group into two sub-groups: two people worked on the
            front-end code and two on the back-end. I took part in the back-end
            development setting up all the routes, and I worked on the
            authentication path and seeds. I created the confirmation link to
            send via email once a user signs up for the first time. I also
            developed the reset-password form adding the verification link via
            email.
          </p>
          <p className="stack">
            Build: React | Node.js | MongoDB | Express | Semantic UI
          </p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://project-3-alexlepri.herokuapp.com/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/project-03"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">City Spot</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default CitySpot;
