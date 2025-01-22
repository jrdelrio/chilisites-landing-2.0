import { CardService } from "../components/CardService";
import { SectionTitle } from "../components/SectionTitle";

import "../styles/services-section.css";

export const ServicesSection = () => {

    const colorWhite = 'var(--color-white)';
    const colorBlack = 'var(--color-black)';
    const colorPurple = 'var(--color-purple)';
    const colorOrange = 'var(--color-orange)';
    const colorPink = 'var(--color-pink)';

    const services = [
        {
            cardTitle: 'Creación de Marca',
            cardIcon: '🌐',
            bgColorL: colorOrange,
            bgColorR: colorPink,
            contentColor: colorBlack
        },
        {
            cardTitle: 'Diseño Web',
            cardIcon: '📈',
            bgColorL: colorPink,
            bgColorR: colorWhite,
            contentColor: colorPurple
        },
        {
            cardTitle: 'Desarrollo Web B2B Corporativo',
            cardIcon: '🔍',
            bgColorL: colorWhite,
            bgColorR: colorPink,
            contentColor: colorBlack
        },
        {
            cardTitle: 'Soluciones E-Commerce',
            cardIcon: '🛒',
            bgColorL: colorPurple,
            bgColorR: colorPink,
            contentColor: colorWhite
        },
        {
            cardTitle: 'Mejora tu tienda Shopify',
            cardIcon: '🎨',
            bgColorL: colorBlack,
            bgColorR: colorBlack,
            contentColor: colorPink
        },
        {
            cardTitle: 'SEO',
            cardIcon: '💼',
            bgColorL: colorOrange,
            bgColorR: colorPink,
            contentColor: colorBlack
        },
        {
            cardTitle: 'Campañas Digitales',
            cardIcon: '🖌️',
            bgColorL: colorPink,
            bgColorR: colorWhite,
            contentColor: colorPurple
        },
        {
            cardTitle: 'Contenidos para redes sociales',
            cardIcon: '🛠️',
            bgColorL: colorPurple,
            bgColorR: colorPink,
            contentColor: colorPink
        },
        {
            cardTitle: 'Dirección de Arte',
            cardIcon: '📱',
            bgColorL: colorBlack,
            bgColorR: colorBlack,
            contentColor: colorWhite
        }
    ];



    return (
        <section id="services-section">
            <div className="container">
                <SectionTitle
                    colorBracket={colorOrange}
                    colorContent={colorBlack}
                    titleContent='<SERVICIOS' />
                <div className="row services-grid gy-4">
                    {services.map((service, index) =>
                        <CardService
                            key={index}
                            cardTitle={service.cardTitle}
                            cardIcon={service.cardIcon}
                            bgColorL={service.bgColorL}
                            bgColorR={service.bgColorR}
                            contentColor={service.contentColor}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}