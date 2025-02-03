import { RoundedCarousel } from "../components/RoundedCarousel";
import { SectionTitle } from "../components/SectionTitle"

import "../styles/blog-section.scss";

export const BlogSection = () => {

    const colorPurple = '$color-purple';
    const colorWhite = '$color-white';

    return (
        <section id='blog-section'>
            <div className="container">
                <SectionTitle colorBracket={colorPurple} titleContent='BLOG' colorTitle={colorWhite} />
            </div>
            <div className="container-fluid">
                <div className="content-center">
                    <RoundedCarousel />
                </div>
            </div>
        </section>
    )
}