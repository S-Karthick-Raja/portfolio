/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Skillsection.css';

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
                            <li>Adapting to new technologies is easy and ill learn quickly.</li>
                            <li>For fetching axios and react fetch ill use. </li>
                            <li>Mostly for front end UI ill Bootstrap,Material-UI library. </li>
                            <li>For  back end ill use mongoose schema. </li>
                            <li>Back end i use JWT and oAuth for Authentication.</li>
                            <li>API's are also used to fetch data from open source like googleapi.</li>

                        </ul>
                        <div className="package">Known Packages:</div>
                        <ul className='skills-list'>
                            <li>npm packages is used for React and NodeJS</li>
                        </ul>
                        <div className="package">Known Library:</div>
                        <ul className='skills-list'>
                            <li>React-Bootstrap</li>
                            <li>Material-UI</li>
                            <li>Materialize</li>
                            <li>Font-Awesome</li>
                        </ul>
                        <div className="package">Known Data Base:</div>
                        <ul className='skills-list'>
                            <li>MongoDB</li>
                            <li>SQL</li>
                        </ul>
                        <a href="#home">Move Top <KeyboardArrowUpIcon /></a>
                    </div>
                    <div className="column right">
                        <div className="status">Status Bar:</div>
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