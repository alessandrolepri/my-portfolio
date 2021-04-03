import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import switcher from "../../projects/switch-form.png";

const Registration = () => {
  return (
    <MDBCarouselItem itemId="8">
      <MDBView>
        <img className="d-block w-60" src={switcher} alt="Registration Form" />
        <div className="about-project">
          <p className="txt">
            The idea was to create an npm package that does not have any JS
            functionality. It is only a layout template about registration form
            where the user can easily switch between the two-component. At the
            moment, this project is only a desktop version, and the idea would
            be to adjust it to a mobile responsive by giving a different layout.
          </p>
          <p className="stack">Build: HTML | CSS | JavaScript</p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://formloginsignup.herokuapp.com/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/Register-Form-Login"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">Registration Form</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default Registration;
