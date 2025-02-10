import "../styles/mockup-shopify.scss";
import mockup from "../img/mockups/shopify-partners-mockup.png"
import logo from "../img/mockups/shopify-partners-logo.png";

export const MockupShopify = () => {
    return (
        <article className="shopify-partners-container">
            <img src={mockup} alt="" srcset="" />
            <img src={logo} alt="" srcset="" />
           
        </article>
    )
}