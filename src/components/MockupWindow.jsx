import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import "../styles/mockup-window.scss";

import videoSrc from "../videos/header-window.mp4";
import loadingFrame from "../img/mockups/header-window-loading.jpg";

export const MockupWindow = ({ initialPositionTop }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [videoTop, setVideoTop] = useState(undefined);
    const videoRef = useRef(null);
    const mockupRef = useRef(null);

    // Detectar el scroll
    const { scrollY } = useScroll();

    useEffect(() => {
        if (initialPositionTop) {
            setVideoTop(initialPositionTop);
        }
    }, [initialPositionTop]);


    // Función para manejar la carga completa del video
    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
        videoRef.current.play();
    };

    return (
        <motion.article
            ref={mockupRef}
            className="window-container">


            {!isVideoLoaded && (
                <img
                    src={loadingFrame}
                    alt="Mockup de carga"
                    className="loading-frame"
                />
            )}

            <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                loop
                onCanPlayThrough={handleVideoLoad} // Detecta cuando está listo para reproducirse
                className="video"
                style={{
                    display: isVideoLoaded ? "block" : "none"
                }}
            />
        </motion.article>
    );
};
