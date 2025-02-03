import { CardService } from "../components/CardService";
import { SectionTitle } from "../components/SectionTitle";
import { services } from "../data/services";

import "../styles/services-section.scss";

const colorBlack = 'var(color-black)';
const colorOrange = 'var(--color-orange)';


export const ServicesSection = () => {

    return (
        <section id="services-section">
            <div className="container">
                <SectionTitle
                    colorBracket={colorOrange}
                    colorContent={colorBlack}
                    titleContent='SERVICIOS' />
                <div className="row services-grid gy-4">
                    {services.map((service, index) =>
                        <CardService
                            key={index}
                            cardTitle={service.cardTitle}
                            cardIcon={service.cardIcon}
                            bgColorL={service.bgColorL}
                            bgColorR={service.bgColorR}
                            contentColor={service.contentColor}
                            description={service.description}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}