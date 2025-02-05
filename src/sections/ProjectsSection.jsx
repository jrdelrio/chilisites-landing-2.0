import { useState, useEffect, useRef } from "react";

import { CardProject } from "../components/CardProject";
import { SectionTitle } from "../components/SectionTitle";

import { projects } from "../data/proyects";

import "../styles/projects-section.scss";

export const ProjectsSection = () => {

    const [showAll, setShowAll] = useState(false);
    const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
    const cardRef = useRef(null)

    const colorBracket = 'var(--color-orange)';
    const colorContent = 'var(--color-black)';



    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    const maxHeight = {
        maxHeight: showAll ? "10000px" : 2 * cardSize.height,
        overflow: "hidden",
        transition: "max-height 2s ease",
    }

    //crea una funcion que devuelva el alto y ancho de cada <CardProject />
    useEffect(() => {
        if (cardRef.current) {
            const { width, height } = cardRef.current.getBoundingClientRect();
            setCardSize({ width, height });
        }
    }, []);


    return (
        <section id="projects-section">
            <div className="container">
                <SectionTitle colorBracket={colorBracket} colorContent={colorContent} titleContent='PROYECTOS' />
            </div>
            <div
                className="container-fluid"
                style={maxHeight}
            >
                <div className="row"

                >
                    {projects.map((project, index) =>
                        <CardProject
                            key={index}
                            cardTitle={project.cardTitle}
                            image={project.image}
                            type={project.type}
                            link={project.link}
                            ref={index === 0 ? cardRef : null}
                        />
                    )}
                </div>
            </div>
            <h3 className="mt-5">
                <a href="" className='color-purple link-all-projects font-roboto' onClick={toggleShowAll}>
                    {showAll ? "<Ver_menos_proyectos />" : "<Ver_todos_los_proyectos />"}
                </a>
            </h3>
        </section>
    )
}