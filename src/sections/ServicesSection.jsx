import { CardService } from "../components/CardService";
import { SectionTitle } from "../components/SectionTitle";

import "../styles/services-section.scss";

// vectores
import { ReactComponent as VectorShop } from "../img/vectors/tienda-vector.svg";
import { ReactComponent as VectorAurea } from "../img/vectors/aurea-vector.svg";
import { ReactComponent as VectorB2B } from "../img/vectors/b2b-vector.svg";
import { ReactComponent as VectorBrain } from "../img/vectors/brain-vector.svg";
import { ReactComponent as VectorArrow } from "../img/vectors/arrow-vector.svg";
import { ReactComponent as VectorCircles } from "../img/vectors/circles-vector.svg";
import { ReactComponent as VectorMagnet } from "../img/vectors/magnet-vector.svg";
import { ReactComponent as VectorCamera } from "../img/vectors/camera-vector.svg";
import { ReactComponent as VectorAnimation } from "../img/vectors/animation-vector.svg";

export const ServicesSection = () => {

    const colorWhite = 'var(--color-white)';
    const colorBlack = 'var(--color-black)';
    const colorPurple = 'var(--color-purple)';
    const colorOrange = 'var(--color-orange)';
    const colorPink = 'var(--color-pink)';

    const services = [
        {
            cardTitle: 'Mejora tu tienda Shopify',
            cardIcon: <VectorShop />,
            bgColorL: colorOrange,
            bgColorR: colorPink,
            contentColor: colorBlack
        },
        {
            cardTitle: 'Diseño Web',
            cardIcon: <VectorAurea />,
            bgColorL: colorPink,
            bgColorR: colorWhite,
            contentColor: colorPurple
        },
        {
            cardTitle: 'Desarrollo Web B2B Corporativo',
            cardIcon: <VectorB2B />,
            bgColorL: colorWhite,
            bgColorR: colorPink,
            contentColor: colorBlack
        },
        {
            cardTitle: 'Soluciones E-Commerce',
            cardIcon: <VectorBrain />,
            bgColorL: colorPurple,
            bgColorR: colorPink,
            contentColor: colorWhite
        },
        {
            cardTitle: 'SEO',
            cardIcon: <VectorArrow />,
            bgColorL: colorBlack,
            bgColorR: colorBlack,
            contentColor: colorPink
        },
        {
            cardTitle: 'Creación de Marca y Re-Branding',
            cardIcon: <VectorCircles />,
            bgColorL: colorOrange,
            bgColorR: colorPink,
            contentColor: colorBlack
        },
        {
            cardTitle: 'Campañas Digitales',
            cardIcon: <VectorMagnet />,
            bgColorL: colorPink,
            bgColorR: colorWhite,
            contentColor: colorPurple
        },
        {
            cardTitle: 'Contenidos para redes sociales',
            cardIcon: <VectorCamera />,
            bgColorL: colorPurple,
            bgColorR: colorPink,
            contentColor: colorPink
        },
        {
            cardTitle: 'Animación digital',
            cardIcon: <VectorAnimation />,
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
                        />
                    )}
                </div>
            </div>
        </section>
    )
}