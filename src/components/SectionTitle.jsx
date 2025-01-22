export const SectionTitle = ({ colorBracket, titleContent, colorTitle }) => {

    const titleStyles = {
        paddingTop: '40px',
        paddingBottom: '40px'
    };

    const bracketStyles = {
        color: colorBracket,
        position: 'relative',
        top: '-15px',
    };

    const contentStyles = {
        color: colorTitle
    };

    return (
        <h2 style={titleStyles}>
            <span style={bracketStyles}>{'{'}</span>
            <span style={contentStyles}>{titleContent}</span>
        </h2>
    )
}