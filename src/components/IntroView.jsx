import { motion } from 'motion/react';
import logo from "../img/chiliSites/logo-chilisites-fondo-solido.png"

export const IntroView = () => {

    const styles = {
        container: {
            position: "absolute",
            backgroundColor: "#000",
            height: "100vh",
            width: "100vw",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            display: "block"
        },
        message: {
            display: "block",
            color: "white",
            marginTop: "40px"
        }
    }
    return (
        <>
            <div className="intro-container" style={styles.container}>
            <div className="intro-message" style={styles.message}>
                    <motion.h2
                    className='font-roboto'
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 1, delay: 3}}
                    >{'< welcome_to_🌶️chiliSites />'}</motion.h2>
                </div>
                <div className="intro-image" style={styles.image}>
                    <motion.img
                        src={logo}
                        initial={{ scale: 0 }}
                        transition={{ duration: 3 }}
                        animate={{ scale: 1 }}
                    >
                    </motion.img>
                </div>
                
            </div>
        </>
    )
}