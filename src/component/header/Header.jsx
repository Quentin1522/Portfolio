
import { useState } from "react";
import ShootingStar from "../stars/ShootingStars";
import Stars from "../stars/Stars";
import Logo from "../../assets/logo_quentin.png";
import MenuBurger from "../menuBurger/Menu";
import Nav from "../nav/Nav";
import Me from "../me/Me";
import "../header/header.scss";

function Header() {
    //déclaration d'un état local pour contrôler l'état de la navigation
    const [isNavOpen, setIsNavOpen] = useState(false);

    //fonction pour basculer l'état de la navigation
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div id="home" className="wrapperHeader">
            <ShootingStar/>
            <Stars/>
            <div className="header">
            <img className="logo" src={Logo} alt="logo" />
            {isNavOpen && <Nav />}
            <MenuBurger onClick={toggleNav} />
            </div>
            <Me/>
        </div>
    );
}

export default Header;