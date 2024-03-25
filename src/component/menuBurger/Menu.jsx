import { useState } from 'react';
import './menu.scss';

const MenuBurger = ({ onClick }) => {

    //déclaration d'un état local pour suivre l'état du boutton cliqué ou non
    const [clicked, setClicked] = useState(false);

    //fonction appelée lors du clic sur le boutton burger
    const handleClick = () => {
        //inversion de l'état du bouton cliqué
        setClicked(!clicked);
        //appel de la fonction onclick passer en prop
        onClick();
    };

    return (
        <div className={`menuBurger ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
}

export default MenuBurger;