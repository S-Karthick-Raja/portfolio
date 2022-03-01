import Projectfetch from "./ProjectFetch";
import React, { useState } from "react";
import Loading from "./Loading";

function ProjectDetail() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shows, setShows] = useState([]);

    return (
        <section className="services" id="Projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                
            </div>
        </section>
    )
}

export default ProjectDetail;