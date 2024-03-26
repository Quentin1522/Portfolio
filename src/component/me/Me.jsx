import { useState, useEffect } from 'react';
import '../me/me.scss';
import github from "../../assets/github.png";

const Me = () => {
    //état pour stocker le titre animé
    const [animatedTitle, setAnimatedTitle] = useState('');
    const originTitle = "Quentin Horneck";

    //état pour stocker le texte animé
    const [animatedText, setAnimatedText] = useState('');
    const originalText = "Passionnée par l'informatique, les jeux-vidéo, j'ai commencé à étudier le développement web en 2019, j'ai suivi une première formation, puis suivi celle d'OpenClassrooms.";

    //effet qui démarre l'animation
    useEffect(() => {
        let titleIndex = 0;
        let textIndex = 0;

        //interval pour le titre
        const titleIntervalId = setInterval(() => {
            if (titleIndex <= originTitle.length) {
                setAnimatedTitle(originTitle.substring(0, titleIndex));
                titleIndex++;
            } else {
                clearInterval(titleIntervalId);
            }
        }, 100);//vitesse pour le titre

        //interval pour le texte
        const textIntervalId = setInterval(() => {
            if (textIndex <= originalText.length) {
                setAnimatedText(originalText.substring(0, textIndex));
                textIndex++;
            } else {
                clearInterval(textIntervalId);
            }
        }, 50);//vitesse pour le texte (ajustez selon vos besoins)

        return () => {
            clearInterval(titleIntervalId);
            clearInterval(textIntervalId);
        };
    }, []);

    return (
        <div className="meWrapper">
            <h2>{animatedTitle}</h2>
            <p>{animatedText}</p>
            <div className="git">
                <p>Pour voir mes différents projets ! </p>
                <a href="https://github.com/Quentin1522">
                <img className='github' src={github} alt='logo github' />
                </a>            
            </div>
        </div>
    );
};

export default Me;