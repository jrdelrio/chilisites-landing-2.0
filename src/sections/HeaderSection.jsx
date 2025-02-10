import { AuroraEffectText } from '../components/AuroraEffectText';
import { Navbar } from '../components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { MockupShopify } from '../components/MockupShopify';
import { motion } from "motion/react";

import "../styles/header-section.scss";

import macbookMockup from '../img/mockups/macbook-mockup.gif';
import iphoneMockup from '../img/mockups/iphone-mockup.gif';

export const HeaderSection = () => {



    const typeWriterText = ["Diseñamos, desarrollamos, optimizamos y promocionamos tu sitio web para que todo el mundo te encuentre."];
    // console.log(typeWriterText)

    return (
        <header id='header-section'>
            <Navbar />
            <h1 className='color-white font-titillium'>Aumenta tu visibilidad con CHILISITES</h1>
            {/* <AuroraEffectText text='CHILISITES' /> */}


            <h3 className='color-white font-roboto'>
                <Typewriter
                    words={typeWriterText}
                    typeSpeed={50}
                    loop={1}
                    cursor={false}

                />
            </h3>

            <div className='mockups'>

                {/* <motion.img
                    src={iphoneMockup}
                    alt="mockup-iphone"
                    initial={{ y: -500, opacity: 0 }} // Inicia fuera de la pantalla, arriba
                    // animate={{ x: -270, y: 90, opacity: 1 }}
                    animate={{ y: 90, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />

                <motion.img
                    src={macbookMockup}
                    alt="mockup-macbook"
                    initial={{ x: "100vw", opacity: 0 }} // Inicia fuera de la pantalla, a la derecha
                    animate={{ x: 160, opacity: 1 }} // Anima hacia su posición final
                    transition={{ duration: 1.5, ease: "easeInOut" }} // Duración y tipo de animación
                /> */}

                {/* <MockupShopify /> */}

            </div>

        </header>
    )
};