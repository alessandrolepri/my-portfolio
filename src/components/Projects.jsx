import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBContainer,
} from "mdbreact";

import WhatIDo from './WhatIDo'

import CitySpot from '../Projects/CitySpot'
import ReadMe from '../Projects/ReadMe'
import Eventify from '../Projects/Eventify'
import Game from '../Projects/TicTacToe'
import Covid from '../Projects/Covid'
import ContactForm from '../Projects/ContactForm'
import Calculator from '../Projects/Caclulator'
import Registration from '../Projects/Registration'
import Forecast from '../Projects/ForecastLondon'
import Quiz from '../Projects/Quiz'

const Projects = () => {
  return (
    <>
      <WhatIDo />
      <section className="header" id="projects">
        <h1>SOME OF MY PROJECTS</h1>
      </section>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={10}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>

            <ReadMe />
            <CitySpot />
            <Eventify />
            <Game />
            <Covid />
            <ContactForm />
            <Calculator />
            <Registration />
            <Forecast />
            <Quiz />

          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </>
  );
};

export default Projects;
