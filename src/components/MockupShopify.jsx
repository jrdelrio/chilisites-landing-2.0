import { useState, forwardRef, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

import mockup from "../img/mockups/shopify-partners-mockup.png"
import logo from "../img/mockups/shopify-partners-logo.png";

import "../styles/mockup-shopify.scss";

// Función para detectar si es un dispositivo móvil
const isMobile = () => window.innerWidth <= 768;

export const MockupShopify = forwardRef((props, ref) => {
    const shopifyRef = useRef(null);
    const isInView = useInView(shopifyRef);
    const [mobile, setMobile] = useState(isMobile());

    return (
        <motion.article
            ref={shopifyRef}
            className="shopify-partners-container"
            initial={{opacity: 0, y: 40}}
            animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? (mobile ? 15 : 30) : -1100,
                y: 40
            }}
            transition={{ duration: 0.5 }}
            >
            <img src={logo} className="logo" alt="Creacion de tiendas con Shopify Partners" />
        </motion.article>
    )
});