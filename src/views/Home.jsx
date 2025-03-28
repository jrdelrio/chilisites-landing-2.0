import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderSection } from "../sections/HeaderSection";
import { ServicesSection } from "../sections/ServicesSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { QuotesAboutSection } from "../sections/QuotesAboutSection";
// import { BlogSection } from "../sections/BlogSection";
import { ContactSection } from "../sections/ContactSection";
import { TechsSection } from "../sections/TechsSection";
import { ClientsSection } from "../sections/ClientsSection";

import "../../src/styles/app.scss";
import { IntroView } from "../components/IntroView";



export const Home = () => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState("100vh");
    const location = useLocation();

    useEffect(() => {
        if (location.state?.sectionId) {
            const section = document.getElementById(location.state.sectionId);
            if (section) {
                setTimeout(() => {
                    // window.scrollTo(headerHeight, section.offsetTop);
                    window.scrollTo(0, section.offsetTop);
                }, 100); // Espera breve para que se renderice la página
            }
        }
    }, [location]);

    useEffect(() => {

        const updateHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.clientHeight * 2);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight)
    }, [headerHeight]);

    return (
        <>
            {/* <IntroView />⁄ */}
            <HeaderSection headerRef={headerRef} />
            <ServicesSection marginTop={headerHeight} />
            <TechsSection />
            <ProjectsSection />
            <QuotesAboutSection />
            <ClientsSection />
            <ContactSection />
            {/* <BlogSection /> */}
        </>
    );
}
