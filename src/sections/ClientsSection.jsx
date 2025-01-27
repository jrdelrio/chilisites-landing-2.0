import "../styles/clients-section.scss";

import algeduc from "../img/clients-logos/algeduc.png";
import alterOffice from "../img/clients-logos/alterOffice.png";
import angeladelrio from "../img/clients-logos/angeladelriopasteleria.png";
import decima from "../img/clients-logos/decimaPropiedades.png";
import dodo from "../img/clients-logos/dodo.png";
import espacioconfluye from "../img/clients-logos/espacioconfluye.png";
import kado from "../img/clients-logos/kado.png";
import labirraesquina from "../img/clients-logos/labirraesquina.png";
import meydey from "../img/clients-logos/meydey.png";
import sieteTintas from "../img/clients-logos/sieteTintas.png";
import srodillo from "../img/clients-logos/srodillo.png";
import victoriaMaldonado from "../img/clients-logos/victoriamaldonado.png";
import sporium from "../img/clients-logos/sporium.png";

export const ClientsSection = () => {

    const clients = [
        algeduc, 
        alterOffice, 
        angeladelrio, 
        dodo, 
        espacioconfluye, 
        kado, 
        srodillo, 
        labirraesquina, 
        sieteTintas, 
        victoriaMaldonado,
        decima, 
        meydey, 
        sporium
    ];

    return (
        <section id="clients-section">
            <div className="container">
                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-logo">
                            <img src={client} alt={`Client ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};