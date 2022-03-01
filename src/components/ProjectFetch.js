/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { API_URL } from "./Global-Constant/globalConstant";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Projectfetch() {
  const [project, setProject] = useState([]);

  const getProjects = () => {
    fetch(`${API_URL}/Portfolio`)
      .then((data) => data.json())
      .then((pjt) => setProject(pjt));
  }
  useEffect(getProjects, []);

  return (  
        <div className="serv-content">
          {project.map(({ avatar, appName, about, sourceUrl, deploy }) => (
            <>
              <Card sx={{ maxWidth: 360 }}>
                <CardActionArea>             
                  <CardContent>
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
  );
}

export default Projectfetch;
