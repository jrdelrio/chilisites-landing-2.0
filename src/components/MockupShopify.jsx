import { forwardRef, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

import mockup from "../img/mockups/shopify-partners-mockup.png"
import logo from "../img/mockups/shopify-partners-logo.png";

import "../styles/mockup-shopify.scss";

export const MockupShopify = forwardRef((props, ref) => {
    const shopifyRef = useRef(null);
    const isInView = useInView(shopifyRef,
        //  { once: true }
        );

    useEffect(() => {
        console.log("shopify is in view: ", isInView)
    }, [isInView]);

    return (
        <motion.article
            ref={shopifyRef}
            className="shopify-partners-container"
            initial={{opacity: 0, y: -40}}
            animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 40 : -1100,
                y: 40
            }}
            transition={{ duration: 0.5 }}
            >
            <img src={logo} className="logo" alt="Creacion de tiendas con Shopify Partners" />
        </motion.article>
    )
});