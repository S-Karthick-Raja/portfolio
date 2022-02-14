/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LanguageIcon from "@mui/icons-material/Language";
import { API_URL } from './Global-Constant/globalConstant';
import { useState } from 'react';

function Project() {
    const [project, setProject] = useState([]);

    const getProjects = () => {
        fetch(`${API_URL}/Portfolio`)
            .then((data) => data.json())
            .then((pjt) => setProject(pjt));
    };
    useEffect(getProjects, []);

    return (
        <section className="services" id="Projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div className="serv-content">
                    {project.map(({ avatar, recipe, about, sourceUrl, deploy }) => (
                        <div className="card">
                            <div className="avatar">
                                <img className="Project-image" src={avatar} alt="recipe-app" />
                            </div>
                            <div className="box">
                                <div className="text">
                                    {" "}
                                    <span className="recipe-name">
                                        <RestaurantMenuIcon /> {recipe}
                                    </span>
                                </div>
                                <p>
                                    {about}
                                </p>
                                <p className="project-btn">
                                    <Button variant="contained" color="success">
                                        <GitHubIcon className="icon" />
                                        <a
                                            className="icon"
                                            href={sourceUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Source Code
                                        </a>{" "}
                                    </Button>
                                </p>
                                <p className="live-btn">
                                    <Button variant="contained" color="error">
                                        <LanguageIcon className="icon" />{" "}
                                        <a
                                            className="icon"
                                            href={deploy}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View Site
                                        </a>{" "}
                                    </Button>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
