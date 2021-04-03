import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import game from "../../projects/tic-tac-toe.png";

const TicTacToe = () => {
  return (
    <MDBCarouselItem itemId="4">
      <MDBView>
        <img className="d-block w-60" src={game} alt="ULTIMATE-TIC-TAC-TOE" />
        <div className="about-project">
          <p className="txt">
            Ultimate Tic-Tac-Toe is a board game for two players playing on the
            same screen.The board is a 3-by-3 grid where each board is a 3-by-3
            grid.The first thing was to create an array in the array returning
            eight arrays of possibly winning combinations. Once I found the
            winning logic, I assigned an ID to each board, “.board”. This ID let
            the move index matching with the board where the user plays to
            disable the next player’s move on the same board, parsing the ID
            board from string to a number assigning a value of -1.
          </p>
          <p className="stack">Build: HTML | CSS | JavaScript</p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a href="http://alexlepri.com/WDI38--Project-01/" target="_blank">
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/WDI38--Project-01"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">Ultimate Tic-Tac-Toe</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default TicTacToe;
