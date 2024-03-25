import "../footer/footer.scss";
import x from "../../assets/logo-x.png";
import linkedin from "../../assets/logo-linkedin.png";
import arrowTop from "../../assets/arrowTop.png";

const Footer = () => {
    return (
        <div id="contact" className="wrapperFooter">
            <h2>Me contacter</h2>
            <div className="containerSocial">
                <p className="socialP">Pour toutes demandes de collaborations ou autres, voici les différentes manières de me contacter pour échanger. </p>
                <a href="https://twitter.com/QuentinDevFr"><img src={x} alt="logo x/twitter"/></a>
                <a href="https://www.linkedin.com/in/quentin-horneck-34131b201/"><img src={linkedin} alt="logo linkdin"/></a>
                <p className="mail">Mail : horneck.quentin@gmail.com</p>
            </div>
            <a className="linkTop" href="#home"><img className="top" src={arrowTop} alt="flèche vers le haut"/></a>
        </div>
    );
};

export default Footer;