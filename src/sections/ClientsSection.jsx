import "../styles/clients-section.scss";
import { clients } from "../data/clients";



export const ClientsSection = () => {

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