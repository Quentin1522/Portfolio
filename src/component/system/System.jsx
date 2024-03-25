import "../system/system.scss";
import { useRef, useEffect, useState } from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import scss from "../../assets/scss.png";
import react from "../../assets/react.png";
import vite from "../../assets/vite.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.svg.png";
import npm from "../../assets/npm.png";
import notion from "../../assets/notion.png";
import figma from "../../assets/figma.png";

const System = () => {

    const systemRef = useRef(null);
    const [isSystemInView, setIsSystemInView] = useState(false);

    useEffect(() => {
        const systemNode = systemRef.current;
        const handleScroll = () => {
            if (systemNode) {
                const { top, bottom } = systemNode.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
                    setIsSystemInView(true);
                } else {
                    setIsSystemInView(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
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
                    
                    <div className="circle">
                        <div className="ballTop react">
                            <img src={react} alt="logo react"/>
                        </div>
                    </div>     
                    
                    <div className="circle">
                        <div className="ballRight redux">
                            <img src={redux} alt="logo redux"/>
                        </div>
                    </div> 
                </div>

                <div className="ballContainer bcFour">
                    <div className="circle">
                        <div className="ballLeft node">
                            <img src={node} alt="logo node"/>
                        </div>
                    </div>     
                    
                    <div className="circle">
                        <div className="ballRight npm">
                            <img src={npm} alt="logo npm"/>
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