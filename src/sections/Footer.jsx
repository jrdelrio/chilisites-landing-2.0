import { useLocation, useNavigate, Link } from "react-router-dom";
import logoChilisites from "../img/chiliSites/logo-chilisites-transparent-white.png";
import { LocationIcon } from "../img/icons/Location";
import { WhatsappIcon } from "../img/icons/Whatsapp";
import { MailIcon } from "../img/icons/EmailIcon";

import "../styles/footer.scss";
import { useEffect } from "react";

export const Footer = () => {

    const location = useLocation(); // 📌 Detecta la página actual
    const navigate = useNavigate(); // 📌 Permite redirigir a otra página

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo(0, section.offsetTop);
        }
    };

    const handleNavigation = (sectionId) => {
        if (location.pathname === "/") {
            scrollToSection(sectionId);
        } else {
            navigate("/", { state: { sectionId } });
        }
    };



    return (
        <footer id="footer" className="font-roboto">
            <div className="logo">
                <button
                    style={{ border: 'none', background: 'none' }}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img src={logoChilisites} alt="chiliSites Logo" srcSet="" />
                </button>
                <h4>{"<Made_in_Chile />"}</h4>
            </div>

            <div className="sections">
                <button onClick={() => handleNavigation('header-section')}>Home</button>
                <button onClick={() => handleNavigation('services-section')}>Servicios</button>
                <button onClick={() => handleNavigation('projects-section')}>Proyectos</button>
                <button onClick={() => handleNavigation('quotes-about-section')}>Sobre_Nosotros</button>
                {/* <a href="">Blog</a> */}
                <button onClick={() => handleNavigation('contact-section')}>Contacto</button>
                <Link to="/blog">Blog</Link>
            </div>

            <div className="contact">
                <a target="_blank" href="mailto:contacto@chilisites.com" rel="noopener noreferrer">
                    <MailIcon /> contacto@chilisites.com
                </a>
                <a target="_blank" href="https://wa.me/56965669585" rel="noopener noreferrer">
                    <WhatsappIcon /> Whatsapp
                </a>
                <a target="_blank" href="https://maps.app.goo.gl/R4WvRe5d42tDkgjz9" rel="noopener noreferrer">
                    <LocationIcon /> Nueva_Costanera 4323, Vitacura, Chile
                </a>
            </div>
        </footer>
    )
}