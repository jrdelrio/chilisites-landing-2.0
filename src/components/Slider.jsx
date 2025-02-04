import { useEffect, useRef, useState } from "react";
import { CardQuote } from "./CardQuote";
import { quotes } from "../data/quotes";
import "../styles/slider.scss";

export const Slider = () => {
    const cardRef = useRef(null);
    const trackRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [trackGap, setTrackGap] = useState(12);
    const [slideTrackWidth, setSlideTrackWidth] = useState(0);

    // console.log(quotes.length);
    // console.log(trackGap);

    // useEffect(() => {
    //     const width = (280 * quotes.length + (trackGap * (quotes.length - 1))) * 2 + 12;
    //     console.log("El ancho del slider es de: ", width);
    //     setSlideTrackWidth(width);
    // }, [quotes, trackGap]);




    // useEffect(() => {
    //     if (cardWidth) {
    //         console.log(`Cada slide mide ${cardWidth}px`);
    //         console.log(`Hay ${quotes.length} slides`)
    //         console.log(`El espacio entre slides es de ${trackGap}px`)
    //         console.log(`El slider mide ${cardWidth * quotes.length + (trackGap * (quotes.length - 1))}px`);
    //     }
    // }, [cardWidth, trackGap]);

    return (
        <div className="slider">
            <div className="slide-track" style={{
                width:
                    slideTrackWidth ? `${slideTrackWidth}px`
                        : "auto"
            }}>
                {quotes.map((quote, index) => (
                    <CardQuote
                        key={quote.id}
                        ref={index === 0 ? cardRef : null}
                        id={quote.id}
                        image={quote.image}
                        quote={quote.quote}
                        empresa={quote.empresa}
                        textColor={quote.textColor}
                        bgColor={quote.bgColor}
                        bgColorDecor={quote.bgColorDecor}
                        imgAltText={quote.imgAltText}
                    />

                ))}
                {quotes.map((quote, index) => (
                    <CardQuote
                        key={`${quote.id} _duplicado`}
                        id={quote.id}
                        image={quote.image}
                        quote={quote.quote}
                        empresa={quote.empresa}
                        textColor={quote.textColor}
                        bgColor={quote.bgColor}
                        bgColorDecor={quote.bgColorDecor}
                        imgAltText={quote.imgAltText}
                    />
                ))}
            </div>
        </div>
    );
}