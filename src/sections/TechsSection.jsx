import { SectionTitle } from "../components/SectionTitle";

// import 'aos/dist/aos.css';
import "../styles/techs-section.scss";
import { TechItem } from "../components/TechItem";

// Importación de imágenes de logos de tecnologías
import reactLogo from "../img/tech-logos/react.png";
import cssLogo from "../img/tech-logos/css.png";
import pythonLogo from "../img/tech-logos/python.png";
import githubLogo from "../img/tech-logos/github.png";
import htmlLogo from "../img/tech-logos/html.png";
import woocommerceLogo from "../img/tech-logos/woocommerce.png";
import javascriptLogo from "../img/tech-logos/javascript.png";
import wordpressLogo from "../img/tech-logos/wordpress.png";
import figmaLogo from "../img/tech-logos/figma.png";
import mysqlLogo from "../img/tech-logos/mysql.png";
import shopifyLogo from "../img/tech-logos/shopify.png";
import elementorLogo from "../img/tech-logos/elementor.png";
import googleAdsLogo from "../img/tech-logos/google-ads.png";
import awsLogo from "../img/tech-logos/aws.png";
import nextLogo from "../img/tech-logos/next.png";
import astroLogo from "../img/tech-logos/astro.png";
import djangoLogo from "../img/tech-logos/django.png";
import vercelLogo from "../img/tech-logos/vercel.png";
import cpanelLogo from "../img/tech-logos/cpanel.png";
import typeScriptLogo from "../img/tech-logos/typescript.png";
import sqliteLogo from "../img/tech-logos/sqlite.png";
import postgreLogo from "../img/tech-logos/postgre.png";
import medusaLogo from "../img/tech-logos/medusa.png";
import sassLogo from "../img/tech-logos/sass.png";
import xdLogo from "../img/tech-logos/xd.png";
import flaskLogo from "../img/tech-logos/flask.png";

const technologies = {
    Frameworks: [
        { tech: "React", img: reactLogo },
        { tech: "Next.js", img: nextLogo },
        { tech: "Astro", img: astroLogo },
        { tech: "Django", img: djangoLogo }
    ],
    Deployment: [
        { tech: "Vercel", img: vercelLogo },
        { tech: "AWS", img: awsLogo },
        { tech: "cPanel", img: cpanelLogo }
    ],
    "Lenguajes de programación": [
        { tech: "JavaScript", img: javascriptLogo },
        { tech: "Python", img: pythonLogo },
        { tech: "TypeScript", img: typeScriptLogo }
    ],
    "Bases de datos": [
        { tech: "MySQL", img: mysqlLogo },
        { tech: "SQLite3", img: sqliteLogo },
        { tech: "PostgreSQL", img: postgreLogo }
    ],
    ECommerce: [
        { tech: "Shopify", img: shopifyLogo },
        { tech: "Medusa", img: medusaLogo },  // Agregar el logo de Medusa si lo tienes
        { tech: "Google Ads", img: googleAdsLogo },
        { tech: "Elementor", img: elementorLogo },
        { tech: "WooCommerce", img: woocommerceLogo }
    ],
    Backend: [
        { tech: "Flask", img: flaskLogo },
        { tech: "AWS EC2", img: awsLogo },
        { tech: "Python", img: pythonLogo }
    ],
    "Herramientas básicas": [
        { tech: "HTML5", img: htmlLogo },
        { tech: "CSS3", img: cssLogo },
        { tech: "SASS", img: sassLogo },
        { tech: "Figma", img: figmaLogo },
        { tech: "Adobe XD", img: xdLogo },
        { tech: "Git", img: githubLogo },
        { tech: "Wordpress", img: wordpressLogo }
    ]
};


export const TechsSection = () => {

    const colorBlack = 'var(--color-black)';
    const colorOrange = 'var(--color-orange)';


    return (
        <section id="techs-section" className="technologies">
            <div className="container">
                <SectionTitle titleContent='TECNOLOGÍAS' colorBracket={colorOrange} colorTitle={colorBlack} />

                {Object.keys(technologies).map((group, index) => (
                    <div key={index} className="tech-group">
                        <h3>{group}:</h3>
                        {/* <details>
                            <summary></summary>
                            <p className="tech-group-description">
                                {group === "Frameworks" && "Creamos tu sitio web usando los más modernos frameworks, optimizando la performance del sitio según su función."}
                                {group === "Deployment" && "Utilizamos las mejores plataformas para el despliegue de tu sitio web, garantizando un rendimiento óptimo y escalabilidad."}
                                {group === "Lenguajes de programación" && "Trabajamos con los lenguajes más potentes para asegurar el mejor desarrollo de tus aplicaciones y sitios."}
                                {group === "Bases de datos" && "Gestionamos eficientemente las bases de datos para que tu sitio web funcione de manera ágil y con seguridad."}
                                {group === "ECommerce" && "Construimos soluciones de e-commerce personalizadas, desde plataformas como Shopify hasta sistemas más complejos como Medusa."}
                                {group === "Backend" && "Desarrollamos soluciones robustas en backend con las mejores tecnologías como Python y AWS."}
                                {group === "Herramientas básicas" && "Para el diseño y desarrollo, contamos con las mejores herramientas como Figma, Git, SASS y más."}
                            </p>
                        </details> */}
                        <div className="technologies-grid">
                            {technologies[group].map((tech, index) => (
                                <TechItem tech={tech} key={index} index={index} />
                            ))}
                        </div>
                    </div>
                ))}



            </div>
        </section>
    );
};