import { AuroraEffectText } from '../components/AuroraEffectText';
import { Navbar } from '../components/Navbar';

import "../styles/header-section.css";

export const HeaderSection = () => {

    const styles = {
        height: '300px',
        width: '400px',
        margin: '20px 250px 50px 0px',
        backgroundColor: 'black'
    };

    return (
        <header id='header-section'>
            <Navbar />
            <h1 className='color-white'>Transforma tu sitio web en un</h1>
            <AuroraEffectText text='CHILISITES'/>
            <h3 className='color-white'>Diseñamos, desarrollamos, optimizamos y promocionamos tu sitio web para que todo el mundo te encuentre.</h3>
            <div style={styles}></div>
        </header>
    )
};