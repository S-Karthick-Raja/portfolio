/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import './Topnavbar.css';

function Topnavbar() {
    return (
        <ReactBootStrap.Navbar
            collapseOnSelect
            expand="lg"
            sticky="top"
            varient="light"
            style={{ backgroundColor: "crimson" }}
        >
            <ReactBootStrap.Container>
                <img
                    alt=""
                    src="https://res.cloudinary.com/karthy/image/upload/v1645019868/avatar/logo512_vkbpbv.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                <ReactBootStrap.Navbar.Brand href="/" >
                    <span className="name-left">Portfolio</span>
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="link-home">
                        <ReactBootStrap.Nav.Link href="#home"><span className="link">Home</span></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#about">
                            <span className="link">About</span>
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#skills">
                            <span className="link">Skills</span>
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#Projects">
                            <span className="link">Projects</span>
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#contact">
                            <span className="link">Contacts</span>
                        </ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#about">
                        <Avatar
                            alt="Karthick Raja S"
                            src="https://res.cloudinary.com/karthy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645023339/avatar/Profile_qilxwz.jpg"
                        />
                    </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
    );
}

export default Topnavbar;

