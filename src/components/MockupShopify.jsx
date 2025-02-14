import "../styles/mockup-shopify.scss";
import mockup from "../img/mockups/shopify-partners-mockup.png"
import logo from "../img/mockups/shopify-partners-logo.png";

export const MockupShopify = () => {
    return (
        <article className="shopify-partners-container"
            style={{
                right: "10%",
                bottom: "12%"
            }}
        >
            {/* <img src={mockup} className="frame" alt="" srcset="" /> */}
            <img src={logo} className="logo" alt="Creacion de tiendas con Shopify Partners" />

        </article>
    )
}