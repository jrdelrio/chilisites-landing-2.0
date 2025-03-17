export const MailToChilisites = (props) => {
    console.log(props)
    return (
    <>
        <p>Hola equipo de Chilisites,</p>
        <p>&nbsp;</p>
        <p>Has recibido un nuevo mensaje de { props.from_name }:</p>
        <p>&nbsp;</p>
        <p>Nombre: { props.from_name }</p>
        <p>Correo electr&oacute;nico: { props.from_email }</p>
        <p>Tel&eacute;fono: { props.from_phone }</p>
        <p>Tipo de proyecto: { props.from_type }</p>
        <p>Suscrito a newsletter: { props.subscription_status }</p>
        <p>Mensaje:</p>
        <p><span style={{color: "#e03e2d"}}>{ props.from_message }&nbsp;</span></p>
        <p>&nbsp;</p>
        <p>Saludos,</p>
        <p>Formulario de contacto - Chilisites</p>
        <p>enviado con resend</p>
    </>
    )
}