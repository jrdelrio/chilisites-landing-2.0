import { Spinner } from "react-bootstrap";

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
        color: buttonColor,
        border: `2px solid ${buttonColor}`, // Borde sólido
        borderRadius: '5px', // Bordes redondeados
        boxShadow: `5px 5px 0 ${buttonColor}`, // Sombra sin blur
        padding: '20px 60px', // Padding recomendado
        width: '100px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    //const formattedText = buttonText.includes('_') ? buttonText.replace(/([^_])$/, '$1_') : buttonText;

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {submitting ? 'SPINNER ENVIANDO' : buttonText}
        </button>
    );
};