import { SectionTitle } from "../components/SectionTitle"

import "../styles/blog-section.css";

export const BlogSection = () => {

    const colorPurple = 'var(--color-purple)';
    const colorWhite = 'var(--color-white)';

    return (
        <section id='blog-section'>
            <div className="container">
                <SectionTitle colorBracket={colorPurple} titleContent='<BLOG' colorTitle={colorWhite} />
            </div>
            <div className="container-fluid">
                <div className="content-center grid">
                    grid
                    grid
                    grid
                </div>
            </div>
        </section>
    )
}