import { useEffect, useState } from "react";

export const CustomCheckbox = ({ checkColor, bgColor, labelText, size, isChecked, onCheckboxChange }) => {

    // Definición de estilos en el objeto styles
    const styles = {
        checkboxContainer: {
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
            cursor: 'pointer'
        },
        checkbox: {
            appearance: "none", // Elimina el estilo predeterminado del navegador
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "10px", // Redondeado del checkbox
            border: "2px solid black",
            // background: bgColor || "linear-gradient(to right, #FFFFFF 90%, #DCB6F4 10%)",
            boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
            cursor: "pointer",
            position: "relative",
            display: "inline-block",
            marginBottom: 0,
            padding: "20px",
            cursor: "pointer"
        },
        checkmark: {
            fontSize: "14px",
            fontWeight: "bold",
            color: checkColor || "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "inline-block",
            cursor: "pointer"
        },
        label: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "var(--color-black)",
        }
    };

    // useEffect(() => {
    //     console.log("checkbox:", isChecked);
    // }, [isChecked]);

    return (
        <div style={styles.checkboxContainer} onClick={() => {
            // console.log('checkbox clicado!');
            onCheckboxChange(!isChecked)
        }}>
            <input
                type="checkbox"
                id="newsletter-checkbox"
                className="custom-checkbox"
                style={styles.checkbox}
                checked={isChecked}
                // onChange={() => {
                //     console.log('checkbox clicado!');
                //     setIsChecked(!isChecked);
                // }}
                readOnly
            />
            {/* Checkmark dinámico visible dentro del div del checkbox */}
            <div style={{ position: "absolute", left: "15px", scale: "2.8", width: `${size}px`, height: `${size}px` }}>
                {isChecked && <span style={styles.checkmark} 
                // onClick={() => {
                //     console.log('checkbox clicado!');
                //     setIsChecked(!isChecked);
                // }} 
                >✓</span>}
            </div>

            <label htmlFor="newsletter-checkbox" style={styles.label}>
                {labelText}
            </label>
        </div>
    );
};
