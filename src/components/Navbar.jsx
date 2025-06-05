import { ContactButton } from "./ContactButton";
import chiliSitesLogo from "../img/chiliSites/logo-chilisites-fondo-solido.png";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../styles/navbar.scss";

export const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

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
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex align-items-center justify-content-between">
                <img src={chiliSitesLogo} alt="Chilisites Logo" className="logo" onClick={()=> handleNavigation('header-section')} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center font-roboto font-bold" id="mainNavbar">
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <button
                                className="nav-link text-white"
                                onClick={() => handleNavigation('services-section')}
                            >
                                Servicios
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-link text-white"
                                onClick={() => handleNavigation('projects-section')}
                            >
                                Proyectos
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-link text-white"
                                onClick={() => handleNavigation('quotes-about-section')}
                            >
                                Sobre Nosotros
                            </button>
                        </li>
                        {/* <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </li> */}
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