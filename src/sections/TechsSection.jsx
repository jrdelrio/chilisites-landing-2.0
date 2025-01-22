import { SectionTitle } from "../components/SectionTitle";
import { Spinner } from "react-bootstrap";

import "../styles/techs-section.css";


export const TechsSection = () => {

    const colorBlack = 'var(--color-black)';
    const orangeColor = 'var(--color-orange)';
    const colorWhite = 'var(--color-white)';

    const technologies = [
        "React",
        "Shopify",
        "WordPress",
        "JavaScript",
        "CSS3",
        "HTML5",
        "SEO Optimization"
    ];

    return (
        <section id="techs-section" className="technologies">
            <div className="container">
                <SectionTitle titleContent='<TECNOLOGÍAS' colorBracket={orangeColor} colorTitle={colorBlack} />
                <div className="technologies-grid">
                    {technologies.map((tech, index) => (
                        <div key={index} className="technology-item">
                            <Spinner animation="border" role="status" />
                            <span className="tooltiptext tooltip-top">Tooltip text</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}