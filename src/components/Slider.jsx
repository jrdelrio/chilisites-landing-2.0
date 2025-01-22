
import { CardQuote } from "./CardQuote";

import algeduc from "../img/algeduc.png";
import angeladelrio from "../img/angeladelriopasteleria.png";
import sieteTintas from "../img/sieteTintas.png";
import decima from "../img/decimaPropiedades.png";
import srodillo from "../img/srodillo.png";

import "../styles/slider.css";

export const Slider = () => {

    const quotes = [
        {
            id: 1,
            image: algeduc,
            quote: '"Ha sido un agrado trabajar en conjunto, destaca por su compromiso y buena disposición."',
            empresa: "ALGEDUC",
            bgColor: "",
            textColor: "",
            imgAltText: "",
        },
        {
            id: 2,
            image: angeladelrio,
            quote: '"Desde nuestra primera reunión demostraron mucho profesionalismo y creatividad, al poco tiempo ya sus estrategias empezaron a dar frutos visibles."',
            empresa: "ANGELA DEL RIO PASTELERÍA",
            bgColor: "",
            textColor: "",
            imgAltText: "",
        },
        // {
        //     id: 3,
        //     image: kado,
        //     quote: '"---El equipo de esta empresa es muy atento y siempre dispuesto a ayudar. Sin duda, seguiremos colaborando con ellos."',
        //     empresa: "KADÓ REGALOS",
        //     bgColor: "",
        //     textColor: "",
        //     imgAltText: "",
        // },
        {
            id: 4,
            image: sieteTintas,
            quote: '"Estamos muy contentos trabajando con ellos. Disposición siempre excelente y cada duda que tenemos o necesitamos una solución, están para aconsejarnos. Vamos creciendo!"',
            empresa: "SIETE TINTAS",
            bgColor: "",
            textColor: "",
            imgAltText: "",
        },
        // {
        //     id: 5,
        //     image: alterOffice,
        //     quote: '"---La calidad del trabajo que entregan es excepcional. Nos han ayudado a alcanzar nuestros objetivos en tiempo récord."',
        //     empresa: "ALTER OFFICE",
        //     bgColor: "",
        //     textColor: "",
        //     imgAltText: "",
        // },
        // {
        //     id: 6,
        //     image: meydey,
        //     quote: '"--Nos sorprendió gratamente la innovación que aportaron a nuestro proyecto. Son expertos en lo que hacen."',
        //     empresa: "MEY DEY",
        //     bgColor: "",
        //     textColor: "",
        //     imgAltText: "",
        // },
        // {
        //     id: 7,
        //     image: dodo,
        //     quote: '"--La creatividad y dedicación de su equipo nos permitió lanzar una campaña muy exitosa. Los recomendamos ampliamente."',
        //     empresa: "DODO",
        //     bgColor: "",
        //     textColor: "",
        //     imgAltText: "",
        // },
        {
            id: 8,
            image: decima,
            quote: '"Hemos tenido una excelente experiencia, demostraron compromiso, creatividad y profesionalismo, lanzando campañas que aumentaron nuestros clientes."',
            empresa: "DÉCIMA PROPIEDADES",
            bgColor: "",
            textColor: "",
            imgAltText: "",
        },
        {
            id: 9,
            image: srodillo,
            quote: '"Me ayudaron diseñando y montando mi sitio web de manera muy efectiva. Llegué con ideas y me llevé soluciones al poco tiempo. Muy recomendado."',
            empresa: "SEBASTIÁN RODILLO DESIGNER",
            bgColor: "",
            textColor: "",
            imgAltText: "",
        },
    ];

    return (
        <div className="slider">
            <div className="slide-track">
                {quotes.map((quote) => (
                    <CardQuote
                        key={quote.id}
                        id={quote.id}
                        image={quote.image}
                        quote={quote.quote}
                        empresa={quote.empresa}
                        textColor={quote.textColor}
                        bgColor={quote.bgColor}
                        imgAltText={quote.imgAltText}
                    />

                ))}
                {quotes.map((quote) => (
                    <CardQuote
                        key={quote.id}
                        id={quote.id}
                        image={quote.image}
                        quote={quote.quote}
                        empresa={quote.empresa}
                        textColor={quote.textColor}
                        bgColor={quote.bgColor}
                        imgAltText={quote.imgAltText}
                    />
                ))}
            </div>
        </div>
    );
}