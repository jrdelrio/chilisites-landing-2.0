import { useState, useEffect, useRef } from "react";

import { CardProject } from "../components/CardProject";
import { SectionTitle } from "../components/SectionTitle";

import "../styles/projects-section.scss";

import foto from "../img/10430812.jpg";
import espacioConfluye from "../img/projects/espacio-confluye.jpg";
import victoriaMaldonado from "../img/projects/victoria-maldonado.jpg";
import angelaDelrio from "../img/projects/angela-delrio.jpg";
import sebastianRodillo from "../img/projects/sebastian-rodillo.jpg";

export const ProjectsSection = () => {

    const [showAll, setShowAll] = useState(false);
    const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
    const cardRef = useRef(null)

    const colorBracket = 'var(--color-orange)';
    const colorContent = 'var(--color-black)';

    const projects = [
        {
            cardTitle: '<Kadó_Regalos',
            image: foto,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<Angela_delRio_Pasteleria',
            image: angelaDelrio,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<Victoria_Maldonado_Ruiz',
            image: victoriaMaldonado,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<Décima_Propiedades',
            image: foto,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<Espacio_Confluye',
            image: espacioConfluye,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<Raimundo_DelRio_Photography',
            image: foto,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<LID_Security',
            image: foto,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<Sebastián_Rodillo_Profile',
            image: sebastianRodillo,
            link: '',
            type: 'CHILISITE'
        }
    ];



    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    const maxHeight = {
        maxHeight: showAll ? "10000px" : 2 * cardSize.height + 40,
        overflow: "hidden",
        transition: "max-height 2s ease",
    }

    //crea una funcion que devuelva el alto y ancho de cada <CardProject />
    useEffect(() => {
        console.log('dentro de useEffect')
        if (cardRef.current) {
            const { width, height } = cardRef.current.getBoundingClientRect();
            setCardSize({ width, height });
        }
    }, []);

    useEffect(()=> {
        console.log(cardSize)
    })

    return (
        <section id="projects-section">
            <div className="container">
                <SectionTitle colorBracket={colorBracket} colorContent={colorContent} titleContent='PROYECTOS' />
            </div>
            <div
                className="container-fluid"
                style={maxHeight}
            >
                <div className="row gy-4"

                >
                    {projects.map((project, index) =>
                        <CardProject
                            key={index}
                            cardTitle={project.cardTitle}
                            image={project.image}
                            type={project.type}
                            ref={index == 0 ? cardRef : null}
                        />
                    )}
                </div>
            </div>
            <h3 className="mt-5">
                <a className='color-purple link-all-projects' onClick={toggleShowAll}>
                    {showAll ? "<Ver menos proyectos />" : "<Ver todos los proyectos />"}
                </a>
            </h3>
        </section>
    )
}