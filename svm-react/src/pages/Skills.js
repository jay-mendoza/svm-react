import './Skills.css';
import React, { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('assets/json/skills.json');
                const json = await response.json();
                setSkills(json);
            } catch (error) {
                console.log("error: ", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('assets/json/certificates.json');
                const json = await response.json();
                setCertificates(json);
            } catch (error) {
                console.log("error: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="skills-page">
            <section>
                <h1>technical skills <span className="mdi mdi-code-tags-check"></span></h1>
                <div className="paragraph">
                    <ul className="skills">
                        {
                            skills.map(skill => 
                                <li>
                                    <span className="icon" style={{backgroundImage: `url(assets/images/skills/${skill.id}.png)`}}></span>
                                    <span className="label">{skill.name}</span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
            <section>
            <h1>certifications <span className="mdi mdi-certificate"></span></h1>
            <div className="paragraph">
                <ul className="certificates">
                    {
                        certificates.map(certificate => 
                            <li>
                                <span style={{backgroundImage: `url(assets/images/certificates/${certificate}.png)`}}></span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
        <section>
            <h1>education <span className="mdi mdi-school"></span></h1>
            <div className="paragraph">
                <article className="education">
                    <div>
                        <h1>2007 – 2011</h1>
                        <div>
                            <span>Masters&nbsp;Science&nbsp;in Computer&nbsp;Engineering</span>
                            <span>Mapúa Institute of Technology</span>
                        </div>
                    </div>
                    <div>
                        <h1>2002 – 2006<span className="mdi mdi-school"></span></h1>
                        <div>
                            <span>Bachelor&nbsp;Science&nbsp;in Computer&nbsp;Engineering</span>
                            <span>Mapúa Institute of Technology</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        </div>
    );
}

export default Skills;
