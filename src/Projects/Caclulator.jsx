import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import calculator from "../../projects/calculator.png";

const CitySpot = () => {
  return (
    <MDBCarouselItem itemId="7">
      <MDBView>
        <img className="d-block w-60" src={calculator} alt="JS Calculator" />
        <div className="about-project">
          <p className="txt">
            This project is a classic JS Calculator where I did replicate a
            mockup design provided by a designer. As an extra feature to this
            calculator has a "save" button that is creating a JSON file of all
            the math operations needed when clicking on 'save' and then
            converted to a CSV file as a table and created an extra copy into
            the localStorage. Future implementation would be to create a MySQL
            database using PHP when clicking on the "save" button.
          </p>
          <p className="stack">
            Build: HTML | CSS | JavaScript | PHP | MySQL | Express
          </p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://my-calculator-js.herokuapp.com/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/JS-Calculator"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">JS Calculator</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default CitySpot;
