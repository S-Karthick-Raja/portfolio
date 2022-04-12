/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Aboutsection.css";

function Aboutsection() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <p className="titlebelow">
          ------<span className="titlespan">Who i am</span>------
        </p>
        <div className="about-content">
          <div className="column left">
            <img
              src="https://res.cloudinary.com/karthy/image/upload/v1644650997/avatar/Profile_ulkx20.jpg"
              className="img1"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/karthy/image/upload/v1649771115/avatar/Profile_media_zw5qeh.jpg"
              className="img2"
              alt=""
            />
          </div>
          <div className="column right">
            <div className="text">
              Hey! I'm <span className="typing-2">Karthick Raja S</span>
            </div>
            <p>
              A Developer & Designer based in India🌍. I’m recently learning Web
              technologies and other design related topics, currently playing
              around with <span className="highlight">React</span> ,{" "}
              <span className="highlight">MongoDB</span> and{" "}
              <span className="highlight">NodeJS</span> 👨‍💻.
            </p>
            <p>
              Other than Programming my hobbies are{" "}
              <span className="highlight">photography</span> 📷 and i love{" "}
              <span className="highlight">travelling</span> and exploring new
              places 🗺️.
            </p>
            <p>
              I'm fully commited to creating asthetically{" "}
              <span className="highlight">beautiful</span> and a{" "}
              <span className="highlight">responsive UI/Design</span> for the
              best user experience 🖥️. I'll love to work with both{" "}
              <span className="highlight">startup</span> and{" "}
              <span className="highlight">reputed</span> companies{" "}
            </p>
            <a
              href="https://drive.google.com/file/d/13VLuqW8qu73_jWlgNChRN-gz67MTU-NE/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutsection;
