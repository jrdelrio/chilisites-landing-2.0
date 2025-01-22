import { CardProject } from "../components/CardProject";
import { SectionTitle } from "../components/SectionTitle";

import "../styles/projects-section.css";

import foto from "../img/10430812.jpg";

export const ProjectsSection = () => {

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
            cardTitle: '<Victoria_Maldonado_Ruiz',
            image: foto,
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
            image: foto,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<Raimundo_Del_Rio_Photography',
            image: foto,
            link: '',
            type: 'CHILISITE'
        },
        {
            cardTitle: '<LID_Security',
            image: foto,
            link: '',
            type: 'CHILISITE'
        }
    ];

    return (
        <section id="projects-section">
            <div className="container">
                <SectionTitle colorBracket={colorBracket} colorContent={colorContent} titleContent='<PROYECTOS' />
            </div>
            <div className="container-fluid">
                <div className="row services-grid gy-4">
                    {projects.map((project, index) =>
                        <CardProject key={index} cardTitle={project.cardTitle} image={project.image} type={project.type}/>
                    )}
                </div>
                <h3 className="mt-5">
                    <a className='color-purple link-all-projects' href="#">
                        {'<Ver_todos_los_proyectos />'}
                    </a>
                </h3>
            </div>
        </section>
    )
}