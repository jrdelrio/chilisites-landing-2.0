import { HeaderSection } from "./sections/HeaderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";

import { QuotesAboutSection } from "./sections/QuotesAboutSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";

import "../src/styles/app.css";
import { TechsSection } from "./sections/TechsSection";

function App() {
    return (
        <>
            <HeaderSection />
            <ServicesSection />
            <ProjectsSection />
            <QuotesAboutSection />
            <TechsSection />
            <BlogSection />
            <ContactSection />
        </>
    );
}

export default App;
