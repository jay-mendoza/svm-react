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
                Here are some of the web projects I have worked on. My professional works have a <span className="mdi mdi-professional-hexagon" style={{fontSize: "20px"}}></span> mark on the title. My personal projects, including this page, are self-hosted on my small web server (so please, do not DDoS me).
                </div>
                <div className="paragraph">I also make non-web Windows apps (WPF). These are small personal tools like batch file renamer, notes, power control, and backup apps. I even converted one of them to a web app (Search-Prime). The projects below are only web apps.</div>
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
