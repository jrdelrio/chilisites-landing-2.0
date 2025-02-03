import { Spinner } from "react-bootstrap";

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
    fontSize = 20

    }) => {

    const buttonStyle = {
        background: `linear-gradient(135deg, ${backgroundColorL} 0%, ${backgroundColorR} 100%)`, // Degradado diagonal
        border: `2px solid ${buttonColor}`, // Borde sólido
        boxShadow: `5px 5px 0 ${buttonColor}`, // Sombra sin blur
        color: buttonColor,
        width: 'fit-content',
        height: 'fit-content',
        padding: '15px 25px',
        fontSize: fontSize,
        marginBottom: "30px",
    };

    //const formattedText = buttonText.includes('_') ? buttonText.replace(/([^_])$/, '$1_') : buttonText;

    return (
        <button className="chilisites-styled-button font-roboto" style={buttonStyle} onClick={handleClick}>
            {submitting ? 'SPINNER ENVIANDO' : buttonText}
        </button>
    );
};