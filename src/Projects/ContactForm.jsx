import React from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";

import nodemailer from "../../projects/nodemailer.png";

const ContactForm = () => {
  return (
    <MDBCarouselItem itemId="6">
      <MDBView>
        <img
          className="d-block w-60"
          src={nodemailer}
          alt="Nodemailer Contact Form"
        />
        <div className="about-project">
          <p className="txt">
            This contact-form is an idea on how to create a standard template to
            implement the 'get in touch' page without sharing your email address
            on the web. Lately, I would like to publish it as an npm package so
            everyone could use it any time by saving their credentials. To
            realise that project I did use Nodemailer, Node.js and Express. The
            client-side component is created by React and implemented by
            Semantic UI and Bootstrap.
          </p>
          <p className="stack">
            Build: HTML | CSS | JavaScript | Express | Nodemailer | Node.js |
            Bootstrap | Semantic UI
          </p>
        </div>
        <MDBMask overlay="black-light" />
      </MDBView>
      <div className="live">
        <div className="heroku">
          <a
            href="https://nodemailer-contact-form.herokuapp.com/"
            target="_blank"
          >
            <i className="devicon-heroku-plain-wordmark"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/alessandrolepri/contact-form-email"
            target="_blank"
          >
            <i className="devicon-github-plain-wordmark colored"></i>
          </a>
        </div>
      </div>
      <MDBCarouselCaption>
        <h3 className="h3-responsive">Nodemailer Contact Form</h3>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default ContactForm;
