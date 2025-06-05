import { useEffect, useRef, useState } from "react";
import { CardQuote } from "./CardQuote";
import { quotes } from "../data/quotes";
import "../styles/slider.scss";

export const Slider = () => {
    const [cardWidth, setCardWidth] = useState(0);
    const [trackGap, setTrackGap] = useState(12);
    const [slideTrackWidth, setSlideTrackWidth] = useState(0);
    const [cicleSeconds, setCicleSeconds] = useState(80);

    const cardRef = useRef(null);

    const isMobile = () => window.innerWidth <= 768;

    useEffect(() => {
        setCicleSeconds(isMobile() ? 100 : 80);

        const handleResize = () => {
            setCicleSeconds(isMobile() ? 100 : 80);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
   
    // Obtiene el ancho de una card después de que el componente se monta
    useEffect(() => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setCardWidth(rect.width);
        }
    }, []);

      // Calcula el ancho total del slide-track una vez que `cardWidth` está definido
      useEffect(() => {
        if (cardWidth > 0) {
            const sliderTrackWidth = (cardWidth * quotes.length + (trackGap * (quotes.length - 1))) * 2;
            setSlideTrackWidth(sliderTrackWidth);
        }
    }, [cardWidth, trackGap]);

    const keyframes = `
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-${cardWidth}px * ${quotes.length} - ${trackGap}px * ${quotes.length - 1}));
            }
        }
    `;

    const cicleTime = `scroll ${cicleSeconds}s linear infinite`;

    return (
        <>
            <style>{keyframes}</style>
            <div className="slider">
                <div className="slide-track" style={{
                    width: slideTrackWidth ? `${slideTrackWidth}px` : "auto",
                    animation: cicleTime,
                    WebkitAnimation: cicleTime
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
        </>
    );
}