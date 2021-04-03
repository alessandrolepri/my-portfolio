import React from "react";

import me from '../../images/me.jpg'

import Do from './AboutmeCard'

const AboutMe = () => {
  return (
    <React.Fragment>
      <section className="about-me" id='aboutme'>
        <h1>WOO, A WHOLE PAGE JUST ABOUT ME!!!</h1>
      </section>
      <hr />
      <section className="wrapper">
        <section className="back">
          <img src={me} alt="Alessandro Lepri" />
        </section>
        <section className="intro">
          <h2>
            Ciao... I am Alessandro
            <img src="https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png" />
          </h2>
          <p>
            I am a Frontend Developer always eager to learn new technologies,
            and with a genuine interest for the best user experience. I have
            experience in React, AEM, Oracle Maxymiser and building A/B tests
            from scratch. My background developed across different teams and
            projects, from optimising websites performance to e-commerce product
            page’s redesign. My desire to learn continues as I seek a role in a
            fast-paced environment where I can demonstrate that I accept
            challenges with a positive attitude. Coding taught me a valuable
            lesson: to stay curious and have a lifelong learning approach to
            anything I do. After 7 years in management and customer service, I
            changed my career into web development. Starting from scratch, my
            motivation and ambition to become a full-stack developer helped me
            to overcome difficulties and pressure. This journey boosted my
            analytical thinking skills and I learned that for solving big
            problems we have to break them down into minor ones. For the last 2
            and a half years, I have worked in a non-technical role for a
            different industry. I enjoyed working in a dynamic environment for a
            company that I was passionate about like wines and spirits. I was
            introduced to coding which led me to the Web Development Immersive
            course at General Assembly. This has fused my love of creativity and
            logic together which is why I have decided to make this life change.
          </p>
        </section>
      </section>
      <Do />
    </React.Fragment>
  );
}
  

export default AboutMe
