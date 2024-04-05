import "../projets/projet.scss";
import "../projets/vanilla";
import LogoGit from "../../assets/github.png";


const Projet = () => {

    setTimeout(function (){
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 35,
            speed: 800,
        });
    }, 1000);
    return (
        <div id="project" className="wrapperProjet">
            <h2>Projets réalisés</h2>
            <div className="containerCard">

               <div className="card tilt-card">
                    <div className="cardHover">
                        <p className="decripProject">
                            Projet ayant pour objectif d'intégrer une maquette en 
                            mobile-first responsive et de travailler sur les animations CSS. 
                            Ainsi que d'utiliser le préprocesseur SASS/SCSS.
                            Il s'agit d'un site permettant au restaurateur de proposer leurs menus sur la plateforme.
                        </p>
                    </div>
                    <div className="title-link">
                    <p className="titleProject">P4 OhMyFood</p>
                    <a href="https://github.com/Quentin1522/Projet-4-OhMyFood">
                        <img src={LogoGit} alt="logo github"/>
                    </a>
                    </div>
                </div>

                <div className="card tilt-card">
                    <div className="cardHover">
                        <p className="decripProject">
                        Projet ayant pour objectif d'interagir avec une API "swagger", 
                            et de travailler le JavaScript pour afficher et filtrer les travaux en provenance de l'API.
                            Il est également possible d'ajouter ou de supprimer un projet. L'ajout de travaux permet de mettre une image, un titre et une catégorie pour les filtres.
                        </p>
                    </div>
                    <div className="title-link">
                    <p className="titleProject">P6 Sophie Bluel</p>
                    <a href="https://github.com/Quentin1522/Projet-6-Sophie-Bluel">
                        <img src={LogoGit} alt="logo github"/>
                    </a>
                    </div>
                </div>

                <div className="card tilt-card">
                    <div className="cardHover">
                        <p className="decripProject">
                            Projet ayant pour objectif de développer une plateforme de location de bien immobilier, 
                            au format application React + le préprocesseur SASS/SCSS
                            et de communiquer avec un fichier JSON, pour récupérer les données relatives au logement que propose la plateforme.
                        </p>
                    </div>
                    <div className="title-link">
                    <p className="titleProject">P8 Kasa</p>
                    <a href="https://github.com/Quentin1522/Projet-8-Kasa">
                        <img src={LogoGit} alt="logo github"/>
                    </a>
                    </div>
                </div>

                {/* 
    <div className="card tilt-card">
        <div className="cardHover">
            <p className="decripProject"></p>
        </div> 
        <p className="titleProject">P 11</p>
    </div>
*/}
            </div>
        </div>
    );
};

export default Projet;