import { forwardRef } from "react";

import "../styles/card-quote.scss";

export const CardQuote = forwardRef(({ id, image, quote, textColor, bgColor, bgColorDecor, imgAltText }, ref) => {

    const styles = {
        backgroundColor: bgColor,
        color: textColor,
        background: `linear-gradient(135deg, ${bgColor} 60%, ${bgColorDecor} 100%)`
    }

    return (
        <div className="slide"
            style={styles}
            ref={ref}
        >
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
                    <p className="font-roboto">{quote}</p>
                </div>
            </div>
        </div>
    )
});