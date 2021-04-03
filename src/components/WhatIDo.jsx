import React from 'react'

import { Card } from "react-bootstrap";

import code from '../../images/code.png'
import cog from '../../images/setting.png'
import mobile from '../../images/mobile.png'

const WhatIDo = () => {
  return (
    <section>
      <section className="header">
        <h2>What I do</h2>
        <h4>Things I&#39;m skilled at and passionate about.</h4>
      </section>
      <section className="frames">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={code} />
          <Card.Body>
            <Card.Title>Web Application Development</Card.Title>
            <Card.Text>
              Fast, responsive and engaging apps that bring your ideas to life.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={mobile} />
          <Card.Body>
            <Card.Title>Mobile Friendly</Card.Title>
            <Card.Text>
              Cross-platform apps built with efficiency and speed for all
              browsers.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cog} />
          <Card.Body>
            <Card.Title>API Integration & Development</Card.Title>
            <Card.Text>
              REST and SOAP API integration. REST API development with Node.js.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </section>
  );
}

export default WhatIDo