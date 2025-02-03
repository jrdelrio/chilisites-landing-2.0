import { forwardRef } from "react";
import { ArrowUp } from "../img/icons/ArrowUp";
import { SymbolPlus } from "../img/icons/SymbolPlus";
import "../styles/card-project.scss";

export const CardProject = forwardRef(({ cardTitle, image, link, type }, ref) => {

    return (
        <div className="project-card font-roboto" ref={ref}>
            <img src={image} alt="" />
            <div className="project-card-footer">
                <h4>{type}</h4>
                {/* <div style={{display: "flex", gap: "10px"}}>
                        <ArrowUp size="24" />
                        <SymbolPlus size="24" />
                    </div> */}
            </div>
            <h3>{cardTitle}</h3>
            <a target="_blank" href={link} className="project-link">{'<Ver_Proyecto>'}</a>
        </div>
    )
})