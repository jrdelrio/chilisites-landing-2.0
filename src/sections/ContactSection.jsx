import { useEffect, useRef, useState } from "react";
import { ChilisitesStyledButton } from "../components/ChilisitesStyledButton";
import { SectionTitle } from "../components/SectionTitle"
import { CustomCheckbox } from "../components/CustomCheckbox";
// import { motion, useInView } from "motion/react";
import { motion, useInView } from "framer-motion";
import { Resend } from 'resend';
import ReactDOMServer from "react-dom/server";

import "../styles/contact-section.scss";


import emailjs from "emailjs-com";
import { MailToChilisites } from "../templates/MailToChilisites";

export const ContactSection = () => {

    const nameRef = useRef(null);
    const isNameInView = useInView(nameRef);

    const phoneRef = useRef(null);
    const isPhoneInView = useInView(phoneRef);

    const emailRef = useRef(null);
    const isEmailInView = useInView(emailRef);

    const typeRef = useRef(null);
    const isTypeInView = useInView(typeRef);

    const messageRef = useRef(null);
    const isMessageInView = useInView(messageRef);


    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    };
    const [mobileDevice] = useState(isMobile);

    const [isChecked, setIsChecked] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const colorPurple = 'var(--color-purple)';
    const colorBlack = 'var(--color-black)';
    const colorOrange = 'var(--color-orange)';
    const colorPink = 'var(--color-pink)';
    const colorWhite = 'var(--color-white)';


    const emptyForm = {
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
        suscribed: isChecked,
    }

    const [formData, setFormData] = useState(() => {
        // itenta buscar el form en session storage
        const savedData = sessionStorage.getItem("formContacto");
        return savedData ? JSON.parse(savedData) : emptyForm;
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        sessionStorage.setItem('formContacto', JSON.stringify(updatedFormData));
    }

    const handleCheckboxChange = (checked) => {
        console.log('checkbox clicked!');
        setIsChecked(checked);
        setFormData(prevState => ({
            ...prevState,
            suscribed: checked
        }));
    };

    // const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // validacion de campos
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.type ||
            !formData.message
        ) {
            alert("Por favor, rellena todos los campos del formulario de contacto.");
            return;
        }

        const subscriptionStatus = formData.suscribed ? "✅" : "❌";

        try {

            // const blob = new Blob([emailBody], { type: "text/html" });
            // const url = URL.createObjectURL(blob);

            // // simular un click en un enlace de descarga
            // const link = document.createElement("a");
            // link.href = url;
            // link.download = `email_${formData.name.replace(/\s/g, '_')}.html`; // Nombre del archivo
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
            // URL.revokeObjectURL(url);

            setSubmitting(true);

            const response = await fetch('http://127.0.0.1:5000/send-email-thanks-for-contact', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        fromName: formData.name,
                        fromEmail: formData.email,
                        fromMessage: formData.message
                    }
                ),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Muchas gracias por contactar con nosotros!❤️ \nRecibirás un correo de confirmación 📧");
                setFormData(emptyForm);
            } else {
                console.error("Error al enviar el correo:", data)
            }
        } catch (error) {
            console.log("Error en la solicitud:", error)
        } finally {
            setSubmitting(false)
        }

    }


    useEffect(() => {
        // console.log(formData)
    }, [formData]);

    useEffect(() => {
        (() => {
            emailjs.init({ publicKey: "service_eknlyzc" });
        })();
    }, []);

    if (!mobileDevice) {

        return (
            <section id='contact-section' className="font-roboto">

                <div className="gradient-bg">
                    <div className="gradients-container">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                    </div>
                </div>


                <div className="container">
                    <SectionTitle titleContent='CONTÁCTANOS' colorTitle={colorBlack} colorBracket={colorPurple} />
                    <form
                        action="">
                        <h4 className="font-bold">{'<Listo_para_el_siguiente_paso?>'}</h4>
                        <input
                            type="text"
                            value={formData.name}
                            placeholder="<Nombre_completo />"
                            id="form-name"
                            name="name"
                            onChange={handleChange}
                        />

                        <div className="row-email-phone">
                            <input
                                type="tel"
                                value={formData.phone}
                                placeholder="<Teléfono />"
                                id="form-phone"
                                name="phone"
                                pattern="9 [0-9]{4}-[0-9]{4}"
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                value={formData.email}
                                placeholder="<Correo />"
                                id="form-email"
                                name="email"
                                onChange={handleChange}
                            />
                        </div>

                        <input
                            type="text"
                            value={formData.type}
                            placeholder="<Tipo_de_Proyecto />"
                            id="form-project-type"
                            name="type"
                            onChange={handleChange}
                        />

                        <textarea
                            value={formData.message}
                            placeholder="<Mensaje />"
                            id="form-message"
                            name="message"
                            onChange={handleChange}
                        >
                        </textarea>

                        <CustomCheckbox
                            checkColor={colorPurple}
                            bgColor={`linear-gradient(to right, ${colorWhite} 90%, ${colorPink} 10%)`}
                            labelText="<Suscribirse_al_newsletter/>"
                            size={15}
                            isChecked={isChecked}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        <div className="content-center">
                            <ChilisitesStyledButton
                                function={handleSubmit}
                                buttonText='<Enviar/>'
                                buttonColor={colorBlack}
                                backgroundColorL={colorOrange}
                                backgroundColorR={colorPink}
                                submitting={submitting}
                            />
                        </div>
                    </form>
                    <span className={`success-message ${showSuccessMessage ? "visible" : "hidden"}`}>
                        {"<Mensaje_enviado!>"}
                    </span>
                </div>
                <script
                    type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
                ></script>
            </section>
        )
    } else {
        return (
            <section
                id='contact-section'
                className="font-roboto"
            >

                <div className="gradient-bg">
                    <div className="gradients-container">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                    </div>
                </div>


                <div className="container">
                    <SectionTitle titleContent='CONTÁCTANOS' colorTitle={colorBlack} colorBracket={colorPurple} />
                    <form
                        action="">
                        <h4 className="font-bold">{'<Listo_para_el_siguiente_paso?>'}</h4>

                        <motion.input
                            ref={nameRef}
                            initial={{ scale: .5 }}
                            animate={isNameInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.4, ease: "easeOut" }}

                            type="text"
                            value={formData.name}
                            placeholder="<Nombre_completo />"
                            id="form-name"
                            name="name"
                            onChange={handleChange}
                        />

                        <div className="row-email-phone"
                        >
                            <motion.input
                                ref={phoneRef}
                                initial={{ scale: 0.5 }}
                                animate={isPhoneInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.4, ease: "easeOut" }}

                                type="tel"
                                value={formData.phone}
                                placeholder="<Teléfono />"
                                id="form-phone"
                                name="phone"
                                pattern="9 [0-9]{4}-[0-9]{4}"
                                onChange={handleChange}
                            />

                            <motion.input
                                ref={emailRef}
                                initial={{ scale: 0.5 }}
                                animate={isEmailInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.4, ease: "easeOut" }}

                                type="email"
                                value={formData.email}
                                placeholder="<Correo />"
                                id="form-email"
                                name="email"
                                onChange={handleChange}
                            />
                        </div>

                        <motion.input
                            ref={typeRef}
                            initial={{ scale: 0.5 }}
                            animate={isTypeInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.4, ease: "easeOut" }}

                            type="text"
                            value={formData.type}
                            placeholder="<Tipo_de_Proyecto />"
                            id="form-project-type"
                            name="type"
                            onChange={handleChange}
                        />

                        <motion.textarea
                            ref={messageRef}
                            initial={{ scale: 0.5 }}
                            animate={isMessageInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.4, ease: "easeOut" }}

                            value={formData.message}
                            placeholder="<Mensaje />"
                            id="form-message"
                            name="message"
                            onChange={handleChange}
                        >
                        </motion.textarea>

                        <CustomCheckbox
                            checkColor={colorPurple}
                            bgColor={`linear-gradient(to right, ${colorWhite} 90%, ${colorPink} 10%)`}
                            labelText="<Suscribirse_al_newsletter/>"
                            size={15}
                            isChecked={isChecked}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        <div className="content-center">
                            <ChilisitesStyledButton
                                function={handleSubmit}
                                buttonText='<Enviar/>'
                                buttonColor={colorBlack}
                                backgroundColorL={colorOrange}
                                backgroundColorR={colorPink}
                                submitting={submitting}
                            />
                        </div>
                    </form>
                    <span className={`success-message ${showSuccessMessage ? "visible" : "hidden"}`}>
                        {"<Mensaje_enviado!>"}
                    </span>
                </div>
                <script
                    type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
                ></script>
                {/* <script type="text/javascript">
                    (function () {
                        emailjs.init({ publicKey: "service_eknlyzc" })})();
                </script> */}
            </section>
        )
    }
}