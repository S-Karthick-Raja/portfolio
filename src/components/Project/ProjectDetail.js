
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { API_URL } from "../Global-Constant/globalConstant";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect } from "react";
import "./ProjectDetail.css";

function ProjectDetail() {
    const [project, setProject] = useState([]);
    const getProjects = () => {
        fetch(`${API_URL}/Portfolio`)
            .then((data) => data.json())
            .then((pjt) => setProject(pjt));
    }
    useEffect(getProjects, []);

    return (
        <section className="services" id="Projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div className="serv-content">
                    {project.map(({ avatar, appName, about, sourceUrl, deploy }) => (
                        <>
                            <Card sx={{ maxWidth: 360 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <img src={avatar} alt={appName} className="avatar"/>
                                        <h3 className="project-name">
                                            {appName}
                                        </h3>
                                        <p variant="body2" color="text.secondary" className="project-about">
                                            {about}
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="button">
                                    <Button size="small" variant="contained" color="success">
                                        <GitHubIcon className="icon" />
                                        <a
                                            className="icon"
                                            href={sourceUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Source Code
                                        </a>
                                    </Button>
                                    <Button size="small" variant="contained" color="error">
                                        <LanguageIcon className="icon" />
                                        <a
                                            className="icon"
                                            href={deploy}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View Site
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectDetail;