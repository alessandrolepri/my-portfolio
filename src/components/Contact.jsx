import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import Nav from './NavContact'

import tuned from "../../images/staytuned.jpeg";
import GetInTouch from "../GetInTouch";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });  

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/contact", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          mobile: "",
          message: ""
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Internal error. Please try again later",
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };
  
  return (
    <React.Fragment>
      <Nav />
      <section className="contactme" id="contact">
        <section className="sayhi">
          <h1>Don&#39;t be a stranger</h1>
          <h3>just say hello!</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunitis to be part of your
            vision.
          </p>
          <h4>Don&#39;t forget to...</h4>
          <img className="follow" src={tuned} alt="Follow Me" />
          <div className="social">
            <div className="icons">
              <a href="https://linkedin.com/in/alessandrolepri" target="_blank">
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
          </div>
        </section>
        <section className="form">
          <div className="contact-form">
            {result && (
              <p className={`${result.success ? "success" : "error"}`}>
                {result.message}
              </p>
            )}
            <form onSubmit={sendEmail}>
              <GetInTouch />
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={state.name}
                  placeholder="Full Name"
                  onChange={onInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  aria-describedby="emailHelp"
                  value={state.email}
                  placeholder="Your email"
                  onChange={onInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={state.message}
                  rows="3"
                  placeholder="Please write your message"
                  onChange={onInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="privacy">
                <div className="required">
                  <p className="required-fields"> INDICATES REQUIRED FIELD </p>
                </div>
              </Form.Group>

              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={
                    state.name.length < 5 ||
                    state.message.length < 100 ||
                    state.email.length < 10
                  }
                >
                  <Icon name="paper plane" />
                  SEND
                </Button>
              </Form.Group>
            </form>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
}

export default ContactForm