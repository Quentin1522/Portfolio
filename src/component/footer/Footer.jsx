import "../footer/footer.scss";
import x from "../../assets/logo-x.png";
import linkedin from "../../assets/logo-linkedin.png";
import arrowTop from "../../assets/arrowTop.png";


const Footer = () => {
    return (
        <div id="contact" className="wrapperFooter">
            <h2>Me contacter</h2>

            <div className="containerSocial">
                <p className="socialP">Pour toutes demandes de collaboration ou autre, voici les différentes manières de me contacter pour échanger.</p>

                <div className="linkContent">
                <a href="https://twitter.com/QuentinDevFr"><img src={x} alt="logo x/twitter"/></a>
                <a href="https://www.linkedin.com/in/quentin-horneck-34131b201/"><img src={linkedin} alt="logo linkdin"/></a>
                </div>

                <a href="mailto:horneck.quentin@gmail.com?subject=Contact via le site Web&body=Bonjour Quentin%2C%0A%0AJ'aimerais discuter d'une opportunité de collaboration avec vous.">Mail : horneck.quentin@gmail.com</a>
            </div>
            <a className="linkTop" href="#home"><img className="top" src={arrowTop} alt="flèche vers le haut"/></a>
        </div>
    );
};

export default Footer;