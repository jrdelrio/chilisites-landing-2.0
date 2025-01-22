import "../styles/footer.css";

export const Footer = () => {

    return (
        <footer id="footer">
            <div className="logo">
                <img src="#" alt="chiliSites Logo" srcSet="" />
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