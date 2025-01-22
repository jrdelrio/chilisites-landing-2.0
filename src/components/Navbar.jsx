import chiliSitesLogo from "../img/logo-chilisites-lg.png";
import "../styles/navbar.css";
import { ContactButton } from "./ContactButton";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex align-items-center justify-content-between">
                <img src={chiliSitesLogo} alt="Chilisites Logo" className="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarsExample07">
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="">Blog</a>
                        </li>
                        <li className="nav-item">
                            <ContactButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}