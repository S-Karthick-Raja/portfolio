/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TypewriterComponent from "typewriter-effect";
import './Homesection.css'

function Homesection() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">WELCOME TO MY WORLD</div>
          <div className="text-2">Hi, I'm S KARTHICK RAJA</div>
          <div className="text-3">
            <TypewriterComponent
              className="typing"
              options={{
                strings: [
                  "MERN STACK DEVELOPER",
                  "Front-End DEVELOPER",
                  "Back-End DEVELOPER",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <a href="#contact" >Hire me</a>
        </div>
      </div>
    </section>
  );
}

export default Homesection;
