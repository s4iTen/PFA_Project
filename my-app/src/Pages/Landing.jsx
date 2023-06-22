import React from "react";
import videoSrc from "../assets/Screen Recording - June 22, 2023.mp4";
import "../Styles/LandingPage.css";

const Landing = () => {
  const home = () => {
    window.location.href = "/Main";
  };

  const login = () => {
    window.location.href = "/login";
  };

  const signup = () => {
    window.location.href = "/signup";
  };

  return (
    <div>
      <div className="landing-page">
        <button onClick={signup}>signup</button>
        <button onClick={login}>Login</button>
        <h1>Nikez</h1>
        <p>
          Step into the world of personalized style with our interactive 3D
          custom Nike shoes design, create, and own your perfect pair.
        </p>
        <div className="right-section">
        <video className="video-player" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="left-section">
        <h2>Interactive 3D Shoe Model</h2>
        <p>
          Experience our innovative interactive 3D shoe model that allows you to
          explore and visualize Nike shoes from every angle. Rotate, and
          interact with a lifelike 3D representation of the shoes, giving you a
          realistic preview of your customized design
        </p>
        <button onClick={home}>Get Ready To Define Your Style</button>
        <div className="about-section">
          </div>
          <div>
            <h2>About</h2>
            <p>
              The Nikez Store project was born out of our shared love for
              sneakers and the desire to create a platform that empowers
              individuals to express their unique style. As a team, we believe
              that footwear is not just a necessity, but a form of
              self-expression and personal identity.
            </p>
            <p>
              Our journey began several months ago when we came together with a
              shared vision. We embarked on this project, investing countless
              hours into research, design, and development to bring the Nikez
              Store to life. We were inspired by the potential to revolutionize
              the way people customize and experience Nike shoes.
            </p>
            <p>
              This project is a testament to our passion for innovation and our
              commitment to providing users with a seamless and engaging
              experience. It is our way of contributing to the vibrant sneaker
              community and empowering individuals to define their style.
            </p>
          </div>
          <p>
            The Nikez Store project is a Portfolio Project for Holberton School,
            and it represents the culmination of our hard work and dedication.
            You can find the project repository on GitHub:
            <a href="https://github.com/your-github-repo-link">
              GitHub Repository
            </a>
          </p>
          <p>
            Connect with our team members on LinkedIn, GitHub, and Twitter:
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/abdelkefi-moez-b794b9252/">
                  LinkedIn
                </a>
              </li>
              <li>
                <p>Moez Abdelkefi</p>
                <a href="https://github.com/moezabdelkefi">GitHub</a>
                <p>Yahya Shouk</p>
                <a href="https://github.com/s4iTen">GitHub</a>
              </li>
              <li>
                <p>Moez Abdelkefi</p>
                <a href="https://twitter.com/moez_abdelkefi">Twitter</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
