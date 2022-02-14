/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Skillsection() {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">MY CREATIVE SKILLS & kNOWLEDGE:</div>
                        <ul className='skills-list'>
                            <li>I got goodknowledge in react,mongodb,nodejs,express.</li>
                            <li>I will adapt to new technologies.</li>
                            <li>I use both axios and react fetch system. </li>
                            <li>I use both axios and react fetch system. </li>

                        </ul>
                        <a href="#home">Move Top <KeyboardArrowUpIcon /></a>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>93%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>82%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>80%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React</span>
                                <span>85%</span>
                            </div>
                            <div className="line react"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>MySQL</span>
                                <span>92%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>MongoDB</span>
                                <span>90%</span>
                            </div>
                            <div className="line mongodb"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>NodeJS</span>
                                <span>86%</span>
                            </div>
                            <div className="line nodejs"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Express JS</span>
                                <span>84%</span>
                            </div>
                            <div className="line expressjs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skillsection