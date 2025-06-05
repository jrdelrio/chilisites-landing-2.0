import { useState, useEffect, useRef } from "react";

import { CardProject } from "../components/CardProject";
import { SectionTitle } from "../components/SectionTitle";

import { projects } from "../data/proyects";

import "../styles/projects-section.scss";

export const ProjectsSection = () => {

    const [showAll, setShowAll] = useState(false);
    const [cardHeight, setCardHeight] = useState(null);
    const [containerHeight, setContainerHeight] = useState(null);


    const cardRef = useRef(null)
    const containerRef = useRef(null);
    const invisibleContainerRef = useRef(null);

    const colorBracket = 'var(--color-orange)';
    const colorContent = 'var(--color-black)';
    const gridGap = 20;

    useEffect(() => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setCardHeight(rect.height);
        }
    }, [cardRef]);

    useEffect(() => {
        if (invisibleContainerRef.current) {
            setContainerHeight(invisibleContainerRef.current.scrollHeight);
        }
    }, [projects]);

    const toggleShowAll = (event) => {
        event.preventDefault();
        setShowAll((prevShowAll) => !prevShowAll);
    };

    const containerStyles = {
        maxHeight: showAll ? `${containerHeight}px` : (cardHeight ? `${2 * cardHeight + gridGap}px` : "auto"),
        overflow: "hidden",
        transition: "max-height 1s ease",
    }

    //crea una funcion que devuelva el alto y ancho de cada <CardProject />
    // useEffect(() => {
    //     if (cardRef.current) {
    //         const { width, height } = cardRef.current.getBoundingClientRect();
    //         setCardSize({ width, height });
    //     }
    // }, []);


    return (
        <section id="projects-section">
            <div className="container">
                <SectionTitle colorBracket={colorBracket} colorContent={colorContent} titleContent='PROYECTOS' />
            </div>

            {/* virtual container */}
            <div
                ref={invisibleContainerRef}
                style={{
                    position: "absolute",
                    visibility: "hidden",
                    pointerEvents: "none",
                    width: "100%",
                }}
            >
                <div className="row" style={{ gap: `${gridGap}px` }}>
                    {projects.map((project, index) =>
                        <CardProject
                            key={index}
                            cardTitle={project.cardTitle}
                            image={project.image}
                            type={project.type}
                            link={project.link}
                        />
                    )}
                </div>
            </div>

            {/* real container */}
            <div
                className="container-fluid"
                style={containerStyles}
                ref={containerRef}
            >
                <div className="row"
                    style={{ gap: `${gridGap}px` }}

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
                <a className='color-purple link-all-projects font-roboto' onClick={toggleShowAll}>
                    {showAll ? "<Ver_menos_proyectos />" : "<Ver_todos_los_proyectos />"}
                </a>
            </h3>
        </section>
    )
}