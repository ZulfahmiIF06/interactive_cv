import React from "react";
import gambar2 from "../assets/img/gambar2.jpg"

const About = () => {
  return (
    <div>
      <section class="about-section">
        <div class="about-container">
          <div class="about-image">
            <div class="image-border">
              <img src={gambar2} alt="" />
            </div>
          </div>
          <div class="about-content">
            <h2>About Me</h2>
            <div class="underline"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
