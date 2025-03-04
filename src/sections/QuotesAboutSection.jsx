import { ChilisitesStyledButton } from "../components/ChilisitesStyledButton";
import { SectionTitle } from "../components/SectionTitle";
import { Slider } from "../components/Slider";

import "../styles/quotesabout-section.scss";

export const QuotesAboutSection = () => {

    const colorPurple = 'var(--color-purple)';
    const colorOrange = 'var(--color-orange)';
    const colorWhite = 'var(--color-white)';
    const colorPurpleSpecial = "#7f6ae8"

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo(0, section.offsetTop);
        }
    };

    const handleClick = () => {
        scrollToSection('contact-section');
    };

    return (
        <section id="quotes-about-section">
            <div className="container">
                <div className="content-center">
                    <Slider />
                    <ChilisitesStyledButton
                        function={handleClick}
                        buttonText='<cotizar_aqui />'
                        buttonColor={colorPurple}
                        backgroundColorL={colorPurpleSpecial}
                        backgroundColorR={colorWhite}
                        width={260}
                        heigth={50}


                    />
                </div>

                <div className="about-us font-roboto">
                    <SectionTitle titleContent='SOBRE_NOSOTROS' colorBracket={colorOrange} colorTitle={colorWhite} />
                    <p className="color-white font-roboto">
                        {'<'}Somos
                        <span>ChiliSites</span>,
                        una agencia digital dedicada a impulsar PyMES a través de una presencia online poderosa.
                        <span>Desarrollamos sitios web</span>
                        en Shopify, Wordpress y creamos soluciones personalizadas, sin plantillas predefinidas y adaptadas a tus necesidades.
                        Ofrecemos
                        <span>estrategias de SEO</span>
                        que mejoran tu visibilidad y crecimiento de manera medible.
                    </p>
                    <p className="color-white font-roboto">
                        Nos apasiona trabajar contigo en cada paso, enfocándonos en resultados claros que hagan 
                        <span>crecer tu negocio</span> 
                        de forma estratégica y sostenible. Nuestro objetivo es que tu marca
                        destaque, convierta más y crezca inteligentemente. 
                        <span>¡Vamos a hacerlo juntos!</span> <br />
                        <span>{'//'}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}