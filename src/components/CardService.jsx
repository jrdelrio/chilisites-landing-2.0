import "../styles/app.css";

// Función para obtener el valor de la variable CSS
const getCSSVariableValue = (variable) => {
    if (variable.startsWith("var(")) {
        // Extraemos la variable sin 'var(--' y ')'
        const varName = variable.replace(/^var\(--/, "").replace(/\)$/, "");
        const rootStyles = getComputedStyle(document.documentElement);
        return rootStyles.getPropertyValue(`--${varName}`).trim();
    }
    return variable; // Si no es una variable CSS, devolver el valor original
};

// Función para convertir de HEX a RGB con opacidad
const hexToRGBA = (hex, alpha = 1) => {
    // Eliminar el símbolo # si está presente
    hex = hex.replace(/^#/, '');

    // Convertir hex a valores RGB
    let r, g, b;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else {
        throw new Error('Formato de color inválido');
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};


export const CardService = ({ cardTitle, cardIcon, bgColorL, bgColorR, contentColor, description }) => {

    // Obtener los valores reales si son variables CSS, de lo contrario, conservar los valores originales
    const resolvedBgColorL = getCSSVariableValue(bgColorL);
    const resolvedBgColorR = getCSSVariableValue(bgColorR);

    // console.log("Color izquierdo:", resolvedBgColorL);
    // console.log("Color derecho:", resolvedBgColorR);

    // Convertir los colores obtenidos a formato rgba
    const bgL_RGBA = hexToRGBA(resolvedBgColorL, 1);
    const bgR_RGBA = hexToRGBA(resolvedBgColorR, 1);

    const styles = {
        background: `linear-gradient(135deg, ${bgL_RGBA} 60%, ${bgR_RGBA} 100%)`,
        color: contentColor,
    };

    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div
                className="service-card font-roboto"
                onTouchStart="this.classList.toggle('hover');"
            >
                <div className="service-card-container">
                    <div
                        className="front" style={styles}
                    >
                        <div className="inner">
                            <h3>{cardTitle}</h3>
                            <div>
                                {cardIcon}
                            </div>
                        </div>
                    </div>

                    <div className="back" style={styles}>
                        <div className="inner">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}