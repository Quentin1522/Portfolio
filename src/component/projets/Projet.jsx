import { useEffect } from 'react';
import "../projets/vanilla";
import projects from '../../Data/projets.json';
import "../projets/projet.scss";
import LogoGit from "../../assets/github.png";

const Projet = () => {
    useEffect(() => {
        setTimeout(function (){
            VanillaTilt.init(document.querySelectorAll(".card"), {
                max: 35,
                speed: 800,
            });
        }, 1000);
    }, []);
    
    return (
        <div id="project" className="wrapperProjet">
            <h2>Projets réalisés</h2>
            <div className="containerCard">
                {
                    projects.map(project => (
                        <div key={project.id} className="card tilt-card">
                            <div className="cardHover">
                                <p className="decripProject">{project.description}</p>
                            </div>
                            <div className="title-link">
                                <p className="titleProject">{project.title}</p>
                                <a href={project.githubUrl}>
                                    <img src={LogoGit} alt="logo github" />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projet;
