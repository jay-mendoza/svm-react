import './Works.css';
import HeroLink from '../shared/HeroLink';
import React, { useEffect, useState } from "react";

function Works() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('assets/json/web-projects.json');
                const json = await response.json();
                setProjects(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="works-page">
            <section>
                <h1>web projects</h1>
                <div className="paragraph">
                    Below you'll find a curated list of web projects I've passionately crafted. Note that those marked with a <span className="mdi mdi-professional-hexagon" style={{ fontSize: "20px" }}></span> symbol denote my professional undertakings. Many of my personal creations, including this very page, are hosted on my private server — so I kindly ask you to handle with care and not stress-test it.
                </div>
                <div className="paragraph">
                    Beyond the web, I also delve into developing Windows applications using WPF. These are intuitive tools tailored for specific tasks, ranging from batch file renaming to power control and data backups. One of these, 'Search-Prime', made its transition from a standalone app to a web-based solution. Please note, the projects showcased here focus solely on my web-based endeavors.
                </div>
            </section>
            {
                projects.map(project =>
                    <section>
                        <div className="paragraph">
                            {HeroLink(project)}
                        </div>
                    </section>)
            }
        </div>
    );
}

export default Works;
