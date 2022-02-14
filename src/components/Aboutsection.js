/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


function Aboutsection() {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src="https://res.cloudinary.com/karthy/image/upload/v1644650997/avatar/Profile_ulkx20.jpg" alt="" />
                    </div>
                    <div className="column right">
                        <div className="text">Hey! I'm <span className="typing-2">Karthick Raja S</span></div>
                        <p>A Developer & Designer based in India🌍. I’m recently learning Web technologies and other design related topics, currently playing around with React ,MongoDB and NodeJS.</p>
                        <a href="https://drive.google.com/file/d/13VLuqW8qu73_jWlgNChRN-gz67MTU-NE/view?usp=sharing" target="_blank" rel="noreferrer">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutsection