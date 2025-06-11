// import { AuroraEffectText } from '../components/AuroraEffectText';
import { Navbar } from '../components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { MockupShopify } from '../components/MockupShopify';
import { ChilisitesStyledButton } from "../components/ChilisitesStyledButton";
// import { motion } from "motion/react";

import "../styles/header-section.scss";

// import macbookMockup from '../img/mockups/macbook-mockup.gif';
// import iphoneMockup from '../img/mockups/iphone-mockup.gif';
import { MockupWindow } from '../components/MockupWindow';
import { useEffect, useRef, useState } from 'react';

export const HeaderSection = () => {
    const headerRef = useRef(null);
    const buttonRef = useRef(null);
    const typewritterRef = useRef(null);
    // const containerRef = useRef(null);
    const shopifyRef = useRef(null);

    const [headerTop, setHeaderTop] = useState(0);
    const [buttonBottom, setButtonBottom] = useState(undefined);

    useEffect(() => {
        if (headerRef.current) {
            const rect = headerRef.current.getBoundingClientRect();
            setHeaderTop(rect.top + window.scrollY);
        }
    }, []);

    useEffect(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setButtonBottom(rect.bottom);
        }
    }, [buttonBottom]);

    useEffect(() => {
        if (typewritterRef.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    setButtonBottom(entry.contentRect.height);
                }
            });

            resizeObserver.observe(typewritterRef.current);

            return () => resizeObserver.disconnect(); // Limpia el observer cuando el componente se desmonta
        }
    }, []);

    const typeWriterText = ["Diseñamos, desarrollamos, optimizamos y promocionamos tu sitio web para que todo el mundo te encuentre."];

    const colorBlack = 'var(--color-black)';
    const colorOrange = 'var(--color-orange)';
    const colorPink = 'var(--color-pink)';
    const colorWhite = 'var(--color-white)';

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo(0, section.offsetTop);
        }
    };

    return (
        <header id='header-section' ref={headerRef}>
            <Navbar />
            <h1 className='color-white font-titillium'>
                Aumenta tu visibilidad online con chilisites
            </h1>
            {/* <AuroraEffectText text='CHILISITES' /> */}

            <h3 className='color-white font-roboto' ref={typewritterRef}>
                <Typewriter
                    words={typeWriterText}
                    typeSpeed={50}
                    loop={1}
                    cursor={false}
                />
            </h3>


            <div ref={buttonRef}>
                <ChilisitesStyledButton
                    buttonText='<Cotizar/>'
                    buttonColor={colorBlack}
                    backgroundColorL={colorOrange}
                    backgroundColorR={colorPink}
                    backgroundColorOptional={colorWhite}
                    width={200}
                    heigth={50}
                    fontWeight="bold"
                    function={() => scrollToSection("contact-section")} 
                />
            </div>

            <div
            // ref={containerRef} 
            className="mockups">
                <MockupWindow initialPositionTop={buttonBottom} />
                <MockupShopify ref={shopifyRef} />
            </div>



        </header >
    )
};