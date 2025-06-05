

import "../styles/custom-checkbox.scss";

export const CustomCheckbox = ({ checkColor, bgColor, labelText, size, isChecked, onCheckboxChange }) => {

    // Definición de estilos en el objeto styles
    const styles = {
        checkbox: {
            width: `${size}px`,
            height: `${size}px`,
        },
        checkmarkContainer: {
            width: `${size}px`,
            height: `${size}px`
        },
        checkmark: {
            color: checkColor || "black",
        }
    };


    return (
        <div
            className="checkbox-container"
            onClick={() => {
                onCheckboxChange(!isChecked)
            }}>
            <input
                type="checkbox"
                id="newsletter-checkbox"
                className="custom-checkbox"
                style={styles.checkbox}
                checked={isChecked}
                readOnly
            />

            {/* Checkmark dinámico visible dentro del div del checkbox */}
            <div style={
                styles.checkmarkContainer
            }
                className="checkmark-container"
            >
                {isChecked && <span className="checkmark" style={styles.checkmark}
                >✓</span>}
            </div>

            <label htmlFor="newsletter-checkbox" >
                {labelText}
            </label>
        </div>
    );
};
