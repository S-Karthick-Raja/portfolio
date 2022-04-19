import React from "react";
import emailjs from "emailjs-com";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import "./Contactsection.css";

function Contactsection() {
  const [success, setSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k58bjcz",
        "template_8l18tlq",
        e.target,
        "user_yRa9bvdTaP7ty5Ef21yaZ"
      )
      .then((res) => {
        e.target.reset();
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <p className="titlebelow">
          ------<span className="titlespan">get in touch</span>------
        </p>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <div className="icons">
              <div className="row">
                <div className="info">
                  <div className="head">
                    <i className="fas fa-user"></i> Name:{" "}
                    <span>S.KARTHICK RAJA</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <div className="head">
                    {" "}
                    <i className="fas fa-envelope"></i> Email:{" "}
                    <span>kraja2796@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <div className="head">
                    <i className="fas fa-phone"></i> Phone:{" "}
                    <span>+91-8667273916</span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="info">
                  <div className="head" style={{ display: "flex" }}>
                    <a
                      href="https://github.com/S-Karthick-Raja"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          marginRight: "20px",
                          fontSize: "12px",
                          alignItems: "center",
                        }}
                      >
                        <GitHubIcon
                          className="socialicon"
                          style={{ marginRight: "7px" }}
                        />{" "}
                        GITHUB
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/karthick-raja-s/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          marginRight: "20px",
                          fontSize: "12px",
                          alignItems: "center",
                        }}
                      >
                        <LinkedInIcon
                          className="socialicon"
                          style={{ marginRight: "7px" }}
                        />{" "}
                        LINKEDIN
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* message body */}

          <div className="column right">
            <div className="text">
              Message me
              {success && (
                <span
                  style={{
                    backgroundColor: "lightgreen",
                    padding: "15px",
                    fontSize: "16px",
                    color: "green",
                    textAlign: "center",
                    marginTop: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <CheckCircleIcon /> Message Has Been Send Successfully.
                </span>
              )}
            </div>
            <form action="#" onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  placeholder="Message....!"
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactsection;
