import "../styles/footer.scss";

import logoChilisites from "../img/chiliSites/logo-chilisites-b&w.png";

export const Footer = () => {

    return (
        <footer id="footer" className="font-roboto">
            <div className="logo">
                <img src={logoChilisites} alt="chiliSites Logo" srcSet="" />
                <h4>{"<Made_in_Chile />"}</h4>
            </div>

            <div className="sections">
                <a href="">Servicios</a>
                <a href="">Proyectos</a>
                <a href="">Sobre_Nosotros</a>
                <a href="">Blog</a>
                <a href="">Contacto</a>
            </div>

            <div className="contact">
                <a href="">contacto@chilisites.com</a>
                <a href="">whatsapp: </a>
                <a href="">Nueva_Costanera 4323, Vitacura, Chile</a>
            </div>
        </footer>
    )
}