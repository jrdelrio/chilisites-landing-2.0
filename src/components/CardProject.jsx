import { ArrowUp } from "../img/icons/ArrowUp";
import { SymbolPlus } from "../img/icons/SymbolPlus";
import "../styles/card-project.scss";

export const CardProject = ({ cardTitle, image, link, type }) => {

    return (
        <div className="project-card font-roboto">
            <img src={image} alt="" />
            <div className="project-card-footer">
                <h4>{type}</h4>
                {/* <div style={{display: "flex", gap: "10px"}}>
                        <ArrowUp size="24" />
                        <SymbolPlus size="24" />
                    </div> */}
            </div>
            <h3>{cardTitle}</h3>
            <a href={link} className="project-link">{'<Ver_Proyecto>'}</a>
        </div>
    )
}