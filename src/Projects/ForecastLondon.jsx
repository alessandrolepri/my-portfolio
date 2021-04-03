import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import forecast from "../../projects/forecast.png";

const Forecast = () => {
  return (
    <MDBCarouselItem itemId="9">
      <MDBView>
        <img className="d-block w-60" src={forecast} alt="London Forecast" />
        <div className="about-project">
          <p className="txt">
            London forecast is a five days weather prediction based on a design
            template to be replicated. This project is using OpenWeather API to
            render the current weather in a three hours laps. At the moment, the
            location is static, which means that you can only check "London"
            weather but future implementation would be to have it dynamic based
            on your geolocation. Sometimes the API is broken so the idea would
            be to create a database that in case of any issue, the app will
            display the latest stable version of it.
          </p>
          <p className="stack">
            Build: HTML | CSS | JavaScript | Express | API
          </p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="https://london5forecast.herokuapp.com/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/5dayForecastLondon"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">London Forecast</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default Forecast;
