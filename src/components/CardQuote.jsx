import "../styles/card-quote.css";

export const CardQuote = ({ id, image, quote, empresa, textColor, bgColor, imgAltText }) => {

    const styles = {
        backgroundColor: bgColor,
    }
    
    return (
        <div className="slide"
        style={styles}>
            <div
                key={id}
                className="quote-card col-xs-12 col-sm-12 col-md-12 col-lg-6 sm-px-0 text-start slide"
                style={styles}
            >
                <img
                    className="img-card-quote"
                    src={image}
                    alt={imgAltText}
                    height={'10px'}
                />
                <div className="quote-text">
                    <p>{quote}</p>
                    {/* <h3>{empresa}</h3> */}
                </div>
            </div>
        </div>
    )
}