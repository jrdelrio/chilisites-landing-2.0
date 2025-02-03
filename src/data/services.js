

import VectorShop from "../img/icons/tienda-vector.png";
import VectorAurea from "../img/icons/aurea-vector.png";
import VectorB2B from "../img/icons/b2b-vector.png";
import VectorBrain from "../img/icons/brain-vector.png";
import VectorArrow from "../img/icons/arrow-vector.png";
import VectorCircles from "../img/icons/circles-vector.png";
import VectorMagnet from "../img/icons/magnet-vector.png";
import VectorCamera from "../img/icons/camera-vector.png";
import VectorAnimation from "../img/icons/animation-vector.png";

// colores en formato var() para que lo tome la funcion getCSSVariableValue
const colorWhite = 'var(--color-white)';
const colorBlack = 'var(--color-black)';
const colorPurple = 'var(--color-purple)';
const colorOrange = 'var(--color-orange)';
const colorPink = 'var(--color-pink)';

export const services = [
    {
        cardTitle: 'Mejora tu tienda Shopify',
        cardIcon: VectorShop,
        bgColorL: colorOrange,
        bgColorR: colorPink,
        contentColor: colorBlack,
        description: 'Convierte tu tienda en una máquina de ventas. Optimizamos diseño, velocidad y funcionalidad para que cada visita cuente.'
    },
    {
        cardTitle: 'Diseño Web',
        cardIcon: VectorAurea,
        bgColorL: colorPink,
        bgColorR: colorWhite,
        contentColor: colorPurple,
        description: 'Un diseño que no solo se ve bien, sino que vende. Creamos experiencias digitales atractivas y funcionales que enamoran a tus clientes.'
    },
    {
        cardTitle: 'Desarrollo Web B2B Corporativo',
        cardIcon: VectorB2B,
        bgColorL: colorWhite,
        bgColorR: colorPink,
        contentColor: colorBlack,
        description: 'Tu empresa necesita presencia digital de alto nivel. Creamos plataformas robustas, seguras y escalables para negocios que buscan crecer.'
    },
    {
        cardTitle: 'Soluciones E-Commerce',
        cardIcon: VectorBrain,
        bgColorL: colorPurple,
        bgColorR: colorPink,
        contentColor: colorWhite,
        description: 'Lleva tu negocio al siguiente nivel con una tienda online optimizada para convertir visitantes en compradores fieles.'
    },
    {
        cardTitle: 'SEO',
        cardIcon: VectorArrow,
        bgColorL: colorBlack,
        bgColorR: colorPink,
        contentColor: colorWhite,
        description: 'Si no te encuentran, no existes. Posicionamos tu web en los primeros lugares de Google para que más clientes lleguen a ti.'
    },
    {
        cardTitle: 'Creación de Marca y Re-Branding',
        cardIcon: VectorCircles,
        bgColorL: colorOrange,
        bgColorR: colorPink,
        contentColor: colorBlack,
        description: 'Tu marca es tu identidad. Creamos o renovamos tu imagen para que conecte con tu audiencia y destaque en el mercado.'
    },
    {
        cardTitle: 'Campañas Digitales',
        cardIcon: VectorMagnet,
        bgColorL: colorPink,
        bgColorR: colorWhite,
        contentColor: colorPurple,
        description: 'Publicidad inteligente que atrae clientes. Lanzamos campañas en redes y Google Ads con estrategias efectivas para maximizar tu inversión.'
    },
    {
        cardTitle: 'Contenidos para redes sociales',
        cardIcon: VectorCamera,
        bgColorL: colorPurple,
        bgColorR: colorPink,
        contentColor: colorPink,
        description: 'Contenido que conecta y vende. Creamos publicaciones estratégicas para captar la atención de tu audiencia y fortalecer tu marca en redes.'
    },
    {
        cardTitle: 'Animación digital',
        cardIcon: VectorAnimation,
        bgColorL: colorBlack,
        bgColorR: colorPink,
        contentColor: colorWhite,
        description: 'Dale vida a tus ideas con animaciones atractivas. Videos, motion graphics y efectos visuales que cautivan y diferencian tu marca.'
    }
];
