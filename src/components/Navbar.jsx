import { ContactButton } from "./ContactButton";
import chiliSitesLogo from "../img/chiliSites/logo-chilisites-fondo-solido.png";
import "../styles/navbar.scss";

export const Navbar = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        console.log(section.offsetTop)
        if (section) {
            window.scrollTo(0, section.offsetTop);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex align-items-center justify-content-between">
                <img src={chiliSitesLogo} alt="Chilisites Logo" className="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center font-roboto font-bold" id="navbarsExample07">
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <button
                                className="nav-link text-white"
                                onClick={() => scrollToSection('services-section')}
                            >
                                Servicios
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-link text-white"
                                onClick={() => scrollToSection('projects-section')}
                            >
                                Proyectos
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-link text-white"
                                onClick={() => scrollToSection('quotes-about-section')}
                            >
                                Sobre Nosotros
                            </button>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link text-white" onClick={() => scrollToSection('blog-section')}>Blog</a>
                        </li> */}
                        <li className="nav-item">
                            <ContactButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}