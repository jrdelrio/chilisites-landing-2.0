import { Spinner } from "react-bootstrap";

import "../styles/chilisites-styled-button.scss";

export const ChilisitesStyledButton = ({
    buttonText,
    backgroundColorL,
    backgroundColorR,
    buttonColor,
    submitting,
    function: handleClick = () => { }
    }) => {

    const buttonStyle = {
        background: `linear-gradient(135deg, ${backgroundColorL} 0%, ${backgroundColorR} 100%)`, // Degradado diagonal
        border: `2px solid ${buttonColor}`, // Borde sólido
        boxShadow: `5px 5px 0 ${buttonColor}`, // Sombra sin blur
        color: buttonColor,
    };

    //const formattedText = buttonText.includes('_') ? buttonText.replace(/([^_])$/, '$1_') : buttonText;

    return (
        <button className="chilisites-styled-button" style={buttonStyle} onClick={handleClick}>
            {submitting ? 'SPINNER ENVIANDO' : buttonText}
        </button>
    );
};