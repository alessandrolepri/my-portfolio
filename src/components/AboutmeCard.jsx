import React from "react";

import { Card } from "react-bootstrap";

import guinea from '../../images/guinea-pig.png'
import tuned from '../../images/tuned.jpeg'

const WhatIDo = () => {
  return (
    <section>
      <section className="frames">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Inspiration</Card.Title>
            <Card.Text>
              Fast, responsive and engaging apps that bring your ideas to life.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Hobbies</Card.Title>
            <Card.Text>
              I am a certified Sommelier, in my spare time, I like to go to a
              tasting to discover new things or try new bar that is promoting
              particular distils and exciting cocktails. I love hiking, walking
              through nature which I found very relaxing, natural medicine that
              helps your mind to be healthy. Since I was young, I have always
              practised a lot of sports from soccer, gym, athletics with a dream
              to complete, one day, a Marathon and then moving to a Triathlon
              competition. Ops, I did almost forgot to tell you that I am a
              Guinea Pig Lover!!!<img className='guinea' src={guinea} alt='Guinea Pig' />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Social</Card.Title>
            <div className="social">
              <div className="icons">
                <a
                  href="https://linkedin.com/in/alessandrolepri"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="icons">
                <a href="https://github.com/alessandrolepri" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div className="icons">
                <a href="https://medium.com/@alex.lepri84" target="_black">
                  <i class="fab fa-medium"></i>
                </a>
              </div>
              <img className='follow' src={tuned} alt='Follow Me' />
            </div>
          </Card.Body>
        </Card>
      </section>
      <hr />
    </section>
  );
};

export default WhatIDo;
