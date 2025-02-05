import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { inView, animate } from 'motion';

export const TechItem = ({ tech, index }) => {

    // const [delay, setDelay] = useState(index);
    const [delay, setDelay] = useState(index * 0.08);
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {

        const animationControls = animate(
            ref.current,
            { scale: 1 },
            { duration: .5, delay: delay, autoplay: false }
        )

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    animationControls.play(); // Inicia la animación solo una vez
                    observer.unobserve(ref.current); // Deja de observar el elemento una vez animado
                } else {
                    setIsInView(false); // Para que la animacion se vuelva a ejecutar cuando vuelva a entrar
                    animationControls.pause(); // Pausa la animacion si sale del viewport

                }
            },
            { threshold: 0.5 } // Ajusta el threshold según tus necesidades (0.5 = 50% visible)
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Limpia el observer al desmontar el componente
                animationControls.stop(); // Detiene la animación para evitar fugas de memoria
            }
        };


    }, [tech.tech, delay]);

    return (
        <motion.div
            ref={ref}
            key={index}
            className="technology-item"
            initial={{ scale: 0 }}
            //transition={{ duration: .5, delay: delay }}
        >
            <img src={tech.img} alt={tech.tech} />
            <span className="tooltiptext tooltip-top">{tech.tech}</span>
        </motion.div>
    )
}