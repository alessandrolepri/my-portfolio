import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import readme from "../../projects/read-me.png";

const ReadMe = () => {
  return (
    <MDBCarouselItem itemId="1">
      <MDBView>
        <img className="d-block w-60" src={readme} alt="READ ME" />
        <div className="about-project">
          <div className="txt">
            READ-ME is an app for both writers and readers
            which helps to share your favourite stories.This app is a SQL
            database written with Python and React that can help you lay the
            groundwork for your story, and organising all of your novel’s major
            events. By using Reddit APIs, we worked on our join tables and
            relationships to provide an excellent experience for all our
            users.We split front- end and back-end tasks, and my main focus was
            on the security and auth session, which I tested using Insomnia.
            Once completed, I worked on the front-end building the navbar,
            sidebar, loading page, and authentication managing to set up the
            reset password path for the users.
          </div>
          <div className="stack">
            Build: Python | React | PostgreSQL | Flask | Marshmallow |
            SQLAlchemy | Semantic UI
          </div>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://read-meee.herokuapp.com" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/project-4"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">Read Me</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default ReadMe;
