import Header from "../component/header/Header";
import System from "../component/system/System";
import Projet from "../component/projets/Projet";
import Footer from "../component/footer/Footer";
import "../pages/home.scss";
const Home = () => {

    //fonction pour faire défiler la fenêtre jusqu'a une section spécifique
    const scrollToSection = (sectionId) => {
        //récupération de l'élément de la section spécifiée par son ID
        const section = document.getElementById(sectionId);
        //vérification si la section existe
        if (section) {
            //faire défiler la fenêtre jusqu'a la section spécifiée avec un effet smooth
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <Header />
            <Projet id="project" />
            <System id="skill" />
            <Footer id="contact" />
        </div>
    );
};

export default Home;