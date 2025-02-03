import "../styles/contact-button.scss";

export const ContactButton = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo(0, section.offsetTop);
        }
    };

    return (
        <button className="contact-button font-roboto" onClick={() => scrollToSection('contact-section')}>Contacto</button>
    )
}