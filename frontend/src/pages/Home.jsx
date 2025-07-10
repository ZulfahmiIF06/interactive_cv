import React from "react";
import Image1 from "../assets/img/gambar 1.jpg";
import About from "./About";
import Project from "./Project";
import Skills from "../components/Skills";
import Education from "./Education";
import 'animate.css';

const Home = () => {
  return (
    <>
      <div className="herobody">
        <ul>
          <li className="ml-9 mb-9 mt-11">
            <img src={Image1} alt="Profile" class="profile-img  animate__animated animate__backInDown" />
          </li>
          <li className="mb-14 ">
            <div className="card animate__animated animate__backInDown" >
              <h2>La Ode Zulfahmi Nadi</h2>
              <p class="role">Fullstack Developer</p>
              <div class="info">
                <div class="item">
                  <img
                    src="https://img.icons8.com/ios-filled/20/ffffff/new-post.png"
                    alt="Email"
                  />
                  <span>Fahminadi.314@gmail.com</span>
                </div>
                <div class="item">
                  <img
                    src="https://img.icons8.com/ios-filled/20/ffffff/marker.png"
                    alt="Location"
                  />
                  <span>Baubau, Sulawesi Tenggara, Indonesia</span>
                </div>
                <div class="item">
                  <img
                    src="https://img.icons8.com/ios-filled/20/ffffff/phone.png"
                    alt="Phone"
                  />
                  <span>085215916610</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <About />
      <Education></Education>
      <Skills></Skills>
      <Project></Project>
    </>
  );
};

export default Home;
