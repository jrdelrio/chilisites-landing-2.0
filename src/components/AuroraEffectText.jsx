import "../styles/aurora-effect-text.css";

export const AuroraEffectText = ({text}) => {
    return (
        <div className="aurora-wrapper">
            <h1 className="aurora-title">{text}
                <div className="aurora">
                    <div className="aurora__item"> </div>
                    <div className="aurora__item"> </div>
                    <div className="aurora__item"> </div>
                    <div className="aurora__item"> </div>
                </div>
            </h1>
        </div>
    )
}