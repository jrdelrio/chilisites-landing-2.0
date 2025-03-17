import { useEffect, useRef, useState } from "react";
import { ChilisitesStyledButton } from "../components/ChilisitesStyledButton";
import { SectionTitle } from "../components/SectionTitle"
import { CustomCheckbox } from "../components/CustomCheckbox";
import { motion, useInView } from "framer-motion";

import "../styles/contact-section.scss";


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
        subscribed: false,
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
        setIsChecked(checked);
        setFormData(prevState => ({
            ...prevState,
            subscribed: checked
        }));
    };

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

        const subscriptionStatus = formData.subscribed ? "✅" : "❌";

        try {

            setSubmitting(true);

            const fetchData = async () => {
                try {
                    const [responseEmailThanks, responseEmailToChilisites] = await Promise.all([
                        fetch('http://127.0.0.1:5000/send-email-thanks-for-contact', {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(
                                {
                                    fromName: formData.name,
                                    fromEmail: formData.email,
                                    fromMessage: formData.message
                                }
                            ),
                        }),
                        fetch('http://127.0.0.1:5000/send-email-to-chilisites', {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(
                                {
                                    fromName: formData.name,
                                    fromEmail: formData.email,
                                    fromPhone: formData.phone,
                                    fromType: formData.type,
                                    fromSubscriptionStatus: formData.subscribed,
                                    fromMessage: formData.message
                                }
                            )
                        })
                    ])

                    if (!responseEmailThanks.ok || !responseEmailToChilisites.ok) {
                        throw new Error('Error en una o ambas solicitudes');
                    }

                    // const data1 = await responseEmailThanks.json();
                    // const data2 = await responseEmailToChilisites.json();

                    if (responseEmailThanks.ok && responseEmailToChilisites.ok) {
                        alert("Muchas gracias por contactar con nosotros! ❤️ \nRecibirás un correo de confirmación 📧");
                        setFormData(emptyForm);
                        setIsChecked(false);
                        sessionStorage.setItem('formContacto', JSON.stringify(emptyForm));
                    } else {
                        if (!responseEmailThanks.ok) console.error("Error al enviar el correo de agradecimiento")
                        if (!responseEmailToChilisites.ok) console.error("Error al enviar el correo a chiliSites")
                    }


                } catch (error) {
                    console.error('Error al obtener los datos:', error)
                } finally {
                    setSubmitting(false)
                }
            };

            fetchData();
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }



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
                    </section>
                )
            }
        }
    