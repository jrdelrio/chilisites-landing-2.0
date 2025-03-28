import { Spinner } from "react-bootstrap";
import { forwardRef } from "react";

import "../styles/chilisites-styled-button.scss";

export const ChilisitesStyledButton = ({
    buttonText,
    backgroundColorL,
    backgroundColorR,
    buttonColor,
    submitting,
    function: handleClick = () => { },
    width = 200,
    heigth = 60,
    fontSize = 20,
    backgroundColorOptional = null,
    fontWeight = "auto"

}) => {

    const background = backgroundColorOptional
        ? `linear-gradient(135deg, ${backgroundColorL} 15%, ${backgroundColorR} 60%, ${backgroundColorOptional} 112%)`
        : `linear-gradient(135deg, ${backgroundColorL} 0%, ${backgroundColorR} 100%)`;

    const buttonStyle = {
        background: background,
        border: `2px solid ${buttonColor}`, // Borde sólido
        boxShadow: `5px 5px 0 ${buttonColor}`, // Sombra sin blur
        color: buttonColor,
        width: width,
        height: heigth,
        padding: '15px 25px',
        fontSize: fontSize,
        marginBottom: "50px",
        fontWeight: fontWeight
    };

    //const formattedText = buttonText.includes('_') ? buttonText.replace(/([^_])$/, '$1_') : buttonText;

    return (
        <button className="chilisites-styled-button font-roboto" style={buttonStyle} onClick={handleClick}>
            {submitting ? <Spinner /> : buttonText}
        </button>
    );
};