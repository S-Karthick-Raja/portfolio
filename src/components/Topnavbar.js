/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

function Topnavbar() {
    const [navbar, setNavbar] = useState(false);
    const [color, setColor] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const changeColor = () => {
        if (window.scrollY >= 30) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeColor);
    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className="max-width">
                <div className="logo"><a href="/">Portfo<span className={color ? 'span active' : 'span'}>lio.</span></a></div>
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#Projects" className="menu-btn">Projects</a></li>
                    <li><a href="#contact" className="menu-btn">Contact</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Topnavbar