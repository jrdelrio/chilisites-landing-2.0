import "../styles/section-title.scss"

export const SectionTitle = ({ colorBracket, titleContent, colorTitle }) => {

    // Función para reemplazar las letras "o" por "0"
    const formatTitleContent = (content) => {
        return content.replace(/o/g, "0").replace(/O/g, "0"); // Reemplaza tanto minúsculas como mayúsculas
    };

    return (
        <h2 className="section-title font-roboto text-replace-o">
            <span className="bracket" style={{color: colorBracket}}>{'{'}</span>
            <span className="main-content" style={{color: colorTitle}} aria-label={titleContent}>
                {'<' + formatTitleContent(titleContent)}

            </span>
        </h2>
    )
}