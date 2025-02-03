import { AuroraEffectText } from '../components/AuroraEffectText';
import { Navbar } from '../components/Navbar';

import "../styles/header-section.scss";

export const HeaderSection = () => {

    const styles = {
        height: '330px',
        width: 'clamp(400px, 80%, 800px)',
        margin: '20px auto 0 auto',

        // temporal
        backgroundColor: 'black',
        color: "white"
    };

    return (
        <header id='header-section'>
            <Navbar />
            <h1 className='color-white font-titillium'>Transforma tu sitio web en un</h1>
            {/* <h1 className='color-white font-titillium'>El ingrediente secreto para tu éxito online</h1> */}
            <AuroraEffectText text='CHILISITES' />
            <h3 className='color-white font-roboto'>Diseñamos, desarrollamos, optimizamos y promocionamos tu sitio web para que todo el mundo te encuentre.</h3>
            <div style={styles}>
                aqui van los mockups
            </div>

        </header>
    )
};