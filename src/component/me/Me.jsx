import { useState, useEffect } from 'react';
import '../me/me.scss';
import github from "../../assets/github.png";

const Me = () => {
    //état pour stocker le titre animé
    const [animatedTitle, setAnimatedTitle] = useState('');
    const originTitle = "Quentin Horneck";

    const[animatedSecondTitle, setAnimatedSecondTitle] = useState('');
    const originSecondTitle = "Développeur React";


    //état pour stocker le texte animé
    const [animatedText, setAnimatedText] = useState('');
    const originalText = "Passionné par l'informatique, les jeux vidéo, j'ai commencé à étudier le développement web en 2019.'ai suivi une première formation, puis j'ai continué avec celle d'OpenClassrooms.";

    //effet qui démarre l'animation
    useEffect(() => {
        let titleIndex = 0;
        let secondTitleIndex = 0;
        let textIndex = 0;

        //interval pour le titre
        const titleIntervalId = setInterval(() => {
            if (titleIndex <= originTitle.length) {
                setAnimatedTitle(originTitle.substring(0, titleIndex));
                titleIndex++;
            } else {
                clearInterval(titleIntervalId);
            }
        }, 40);//vitesse pour le titre


                //interval pour le titre
                const secondTitleIntervalId = setInterval(() => {
                    if (secondTitleIndex <= originSecondTitle.length) {
                        setAnimatedSecondTitle(originSecondTitle.substring(0, secondTitleIndex));
                        secondTitleIndex++;
                    } else {
                        clearInterval(secondTitleIntervalId);
                    }
                }, 0);//vitesse pour le titre secondaire

        //interval pour le texte
        const textIntervalId = setInterval(() => {
            if (textIndex <= originalText.length) {
                setAnimatedText(originalText.substring(0, textIndex));
                textIndex++;
            } else {
                clearInterval(textIntervalId);
            }
        }, 10);//vitesse pour le texte

        return () => {
            clearInterval(titleIntervalId);
            clearInterval(textIntervalId);
            clearInterval(secondTitleIntervalId);
        };
    }, []);

    return (
        <div className="meWrapper">
            <h2>{animatedTitle}</h2>
            <h3>{animatedSecondTitle}</h3>
            <p>{animatedText}</p>
            <div className="git">
                <div className='blockLink'>
                    <a className='textLink' href='https://github.com/Quentin1522'>Pour voir mes réalisations !</a>
                </div>

                <div className='blockLink'>
                    <a href="https://github.com/Quentin1522">
                        <img className='github' src={github} alt='logo github' />
                    </a>     
                </div>       
            </div>
        </div>
    );
};

export default Me;