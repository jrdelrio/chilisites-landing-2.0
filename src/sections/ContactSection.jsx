import { useEffect, useState } from "react";
import { ChilisitesStyledButton } from "../components/ChilisitesStyledButton";
import { SectionTitle } from "../components/SectionTitle"
import { CustomCheckbox } from "../components/CustomCheckbox";

import "../styles/contact-section.css";

import emailjs from "emailjs-com";

export const ContactSection = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const colorPurple = 'var(--color-purple)';
    const colorBlack = 'var(--color-black)';
    const colorOrange = 'var(--color-orange)';
    const colorPink = 'var(--color-pink)';

    const tempStyle = {
        width: '70%',
        margin: 'auto',
    }

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
        setIsChecked(checked);
        setFormData(prevState => ({
            ...prevState,
            suscribed: checked
        }));
    };

    const handleSubmit = (event) => {
        console.log('submit button pressed!')
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

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            from_type: formData.type,
            from_message: formData.message,
        }

        // Obtener las variables desde el entorno
        const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

        setSubmitting(true);

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then(() => {
                setSubmitting(false);
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 4000);

                // alert("¡Correo enviado correctamente! 👌");

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    type: "",
                    message: "",
                }); //limpieza de formulario
            },
                (error) => {
                    alert("Ocurrió un error al enviar el correo.");
                }
            );

        //email de confirmación
        const confirmationTemplateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_message: formData.message
        };

        const TEMPLATE_CONFIRM_ID = "template_bxnur57";

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_CONFIRM_ID,
                confirmationTemplateParams,
                USER_ID
            )
            .then(
                (result) => {
                    console.log(
                        "Correo de confirmación enviado correctamente!",
                        result.text
                    );
                },
                (error) => {
                    console.log(
                        "Error al enviar el correo de confirmación:",
                        error.text
                    );
                }
            );
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <section id='contact-section'>
            <div className="container">
                <SectionTitle titleContent={'<CONTÁCTANOS'} colorTitle={colorBlack} colorBracket={colorPurple} />
                <form action="" style={tempStyle}>
                    <h4>{'<'}Listo_para_el_siguiente_paso?{'>'}</h4>
                    <input
                        type="text"
                        value={formData.name}
                        placeholder="<Nombre_completo />"
                        id="form-name"
                        name="name"
                        onChange={handleChange}
                    />

                    <div className="row-name-email">
                        <input
                            type="email"
                            value={formData.email}
                            placeholder="<Correo />"
                            id="form-email"
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="phone"
                            value={formData.phone}
                            placeholder="<Teléfono />"
                            id="form-phone"
                            name="phone"
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
                        checkColor="#573AE7"
                        bgColor="linear-gradient(to right, #FFFFFF 90%, #DCB6F4 10%)"
                        labelText="<Suscribirse_al_newsletter/>"
                        size={15}
                        isChecked={isChecked}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <div className="content-center">
                        <ChilisitesStyledButton
                            function={handleSubmit}
                            buttonText='<Enviar/>'
                            buttonColor='var(--color-black)'
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
            <script type="text/javascript">
                (function () {
                    emailjs.init({ publicKey: "service_eknlyzc" })})();
            </script>
        </section>
    )
}