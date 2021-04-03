import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./module.scss";

import HomePage from "./components/HomePage";
import AboutMe from "./components/AbouMe";
import Projects from "./components/Projects";
import Skills from './components/Skills'
import Nav from './components/Navbar'


class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <HomePage />
        <AboutMe />
        <Projects />
        <Skills />
      </React.Fragment>
    );
  }
}

export default Page
