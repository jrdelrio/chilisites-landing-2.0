import { HeaderSection } from "./sections/HeaderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { QuotesAboutSection } from "./sections/QuotesAboutSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";
import { TechsSection } from "./sections/TechsSection";
import { ClientsSection } from "./sections/ClientsSection";

import "../src/styles/app.css";

function App() {
    return (
        <>
            <HeaderSection />
            <ServicesSection />
            <ProjectsSection />
            <QuotesAboutSection />
            <TechsSection />
            <BlogSection />
            <ClientsSection />
            <ContactSection />
        </>
    );
}

export default App;
