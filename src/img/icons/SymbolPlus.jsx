export const SymbolPlus = ({
                    size = 24,
                    color = "#FFFFFF",
                    bgColor = "rgba(0, 0, 0, 0.8)",
                }) => {
                    return (
                        <svg
                        className="symbol-plus"
                            xmlns="http://www.w3.org/2000/svg"
                            width={size}
                            height={size}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                                backgroundColor: bgColor,
                                borderRadius: '50%' // Hace que el fondo sea un círculo
                            }}
                        >
                            <circle cx="12" cy="12" r="10" fill={bgColor} />
                            <path d="M8 12h8" />
                            <path d="M12 8v8" />
                        </svg>
                    );
};
