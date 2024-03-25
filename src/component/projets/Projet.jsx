import "../projets/projet.scss";
import "../projets/vanilla";

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
                    <p className="titleProject">P 4</p>
                </div>

                <div className="card tilt-card">
                    <div className="cardHover">
                        <p className="decripProject">
                            Projet ayant pour objectif d'interagir avec une API "swagger", 
                            et de travailler le JavaScript pour afficher et filtrer les projets en provenance de l'API.
                            Il est également possible d'ajouter ou de supprimer un projet. L'ajout de projet permet de mettre une image, un titre et une catégorie pour les filtres.
                        </p>
                    </div>
                    <p className="titleProject">P 6</p>
                </div>

                <div className="card tilt-card">
                    <div className="cardHover">
                        <p className="decripProject">
                            Projet ayant pour objectif de développer une plateforme de location de bien immobilier, 
                            au format application React + le préprocesseur SASS/SCSS
                            et de communiquer avec un fichier JSON, pour récupérer les données relatives au logement que propose la plateforme.
                        </p>
                    </div>
                    <p className="titleProject">P 8</p>
                </div>

                <div className="card tilt-card">
                    <div className="cardHover">
                        <p className="decripProject"></p>
                    </div> 
                    <p className="titleProject">P 11</p>
                </div>
            </div>
        </div>
    );
};

export default Projet;