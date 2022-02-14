/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LanguageIcon from '@mui/icons-material/Language';

function Project() {
    return (
        <section className="services" id="Projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <div className="text"> <FoodBankIcon /> Recipe Application</div>
                            <h3>ABOUT</h3>
                            <p>Here You Can Create Your Individual Recipe. It can be added to our side.we can update it and if not we can also delete the recipes.</p>
                            <p className='project-btn'>
                                <Button variant="contained" color="success"><GitHubIcon className='icon' /> Source Code</Button>
                            </p>
                            <p className='live-btn'>
                                <Button variant="contained" color="error"><LanguageIcon className='icon' /> <a className='icon' href="https://day-31-task.netlify.app/" target="_blank" rel="noreferrer">View Site</a> </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project