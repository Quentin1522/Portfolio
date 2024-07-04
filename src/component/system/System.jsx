import "../system/system.scss";
import { useRef, useEffect, useState } from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import scss from "../../assets/scss.png";
import react from "../../assets/react.png";
import github from "../../assets/github.png";
import vite from "../../assets/vite.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.svg";
import npm from "../../assets/npm.png";
import notion from "../../assets/notion.png";
import figma from "../../assets/figma.png";

const System = () => {
    //élément à observer
    const systemRef = useRef(null);
    //état pour indiquer si l'élément est visible dans le fenêtre ou non
    const [isSystemInView, setIsSystemInView] = useState(false);

    //effet secondaire pour observer le défilement de la fenêtre et mettre à jour l'état en conséquence
    useEffect(() => {
        //récupération du noeud du domm de l'élément à obsever
        const systemNode = systemRef.current;
        //fonction pour gérer le défilment de la fenêtre
        const handleScroll = () => {
            if (systemNode) {
                //récupération des coordonnées de l'élément par rapport à la fenêtre
                const { top, bottom } = systemNode.getBoundingClientRect();
                //récupération de la hauteur de la fenêtre du navigateur
                const windowHeight = window.innerHeight;
                //vérification si l'élément est à moitié visible dans la fenêtre
                if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
                    //si oui, maj de l'état pour indiquer que l'élément est visible
                    setIsSystemInView(true);
                } else {
                    //sinon, maj de l'état pour indiquer que l'élément n'est pas visible
                    setIsSystemInView(false);
                }
            }
        };

        //ajout d'un écouteur d'évenement pour le défilement de la fenêtre
        window.addEventListener("scroll", handleScroll);
        //appel de la fonction handlescroll
        handleScroll();

        //nettoyage de l'écouteur d'évenement lors du démontage du composant
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        //les crochets vidz signifient que cet effet ne dépend d'aucune valeur externe
        //et ne doit être exécuté qu'une seule fois lors du montage du composant 
    }, []);

    return (
        <div id="skill" className={`wrapperSystem ${isSystemInView ? "active" : ""}`} ref={systemRef}>
            <h2>Compétences et outils</h2>
            <div className="systemContainer">
                <div className="ballContainer bcOne">
                    <div className="circle">
                        <div className="ballLeft html">
                            <img src={html} alt="logo html"/>
                        </div>
                    </div>

                    <div className="circle">
                        <div className="ballRight css">
                            <img src={css} alt="logo css"/>
                        </div>
                    </div> 
                </div>

                <div className="ballContainer bcTwo">
                    <div className="circle">
                        <div className="ballLeft js">
                            <img src={js} alt="logo js"/>
                        </div>
                    </div>     
                    
                    <div className="circle">
                        <div className="ballRight scss">
                            <img src={scss} alt="logo scss"/>
                        </div>
                    </div>  
                </div>

                <div className="ballContainer bcThree">
                    <div className="circle">
                        <div className="ballLeft vite">
                            <img src={vite} alt="logo vite"/>
                        </div>
                    </div>     

                    <div className="circleCenter">
                        
                    <div className="circle">
                        <div className="ballTop react">
                            <img src={react} alt="logo react"/>
                        </div>
                    </div>

                    <div className="circle">
                        <div className="ballTop typescript">
                            <img src={typescript} alt="logo typescript"/>
                        </div>
                    </div> 

                    <div className="circle">
                        <div className="ballTop npm">
                            <img src={npm} alt="logo npm"/>
                        </div>
                    </div> 

                    <div className="circle">
                        <div className="ballTop github">
                            <img src={github} alt="logo github"/>
                        </div>
                    </div> 
                    
                    </div>      
                    
                    <div className="circle">
                        <div className="ballRight redux">
                            <img src={redux} alt="logo redux"/>
                        </div>
                    </div> 
                </div>

                <div className="ballContainer bcFive">
                    <div className="circle">
                        <div className="ballLeft notion">
                            <img src={notion} alt="logo notion"/>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="ballRight figma">
                            <img src={figma} alt="logo figma"/>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default System;