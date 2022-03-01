import React from "react";
import emailjs from "emailjs-com";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contactsection.css";

function Contactsection() {
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
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>If you want to reachme out . send me a message .</p>
                        <div className="icons">
                            <div className="row">
                                <div className="info">
                                    <div className="head">
                                        <i className="fas fa-user"></i> Name: <span>S.KARTHICK RAJA</span>
                                    </div>                                 
                                </div>
                            </div>
                            <div className="row">
                                <div className="info">
                                    <div className="head">
                                        {" "}
                                        <i className="fas fa-map-marker-alt"></i> Address: <span>13/44B 8TH CROSS STREET, SAKTHI NAGAR,</span>
                                    </div>              
                                    <div className="sub-title">TIRUPATTUR-DT(635-601)</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="info">
                                    <div className="head">
                                        {" "}
                                        <i className="fas fa-envelope"></i> Email: <span>kraja2796@gmail.com</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="info">
                                    <div className="head">
                                        <i className="fas fa-phone"></i> Phone: <span>+91-8667273916</span>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="account_buttons">
                                <Button
                                    variant="contained"
                                    style={{ marginRight: "20px", fontSize: "16px" }}
                                >
                                    <GitHubIcon className="socialicon" />
                                    <a
                                        href="https://github.com/S-Karthick-Raja"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        GITHUB{" "}
                                    </a>
                                </Button>
                                <Button variant="contained" style={{ fontSize: "16px" }}>
                                    <LinkedInIcon className="socialicon" />
                                    <a
                                        href="https://www.linkedin.com/in/karthick-raja-46b1b1227/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        LINKEDIN{" "}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
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
