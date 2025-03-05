import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Navbar } from "../components/Navbar";
import { Footer } from "../sections/Footer";
import "../styles/post-page.scss"



export const PostPage = () => {
    const { slug } = useParams();
    const [postContent, setPostContent] = useState("");
    const [postTitle, setPostTitle] = useState("");

    useEffect(() => {
        fetch(`/posts/posts.json`)
            .then((res) => res.json())
            .then((data) => {
                const post = data.find((p) => p.slug === slug);
                if (post && post.file) {
                    setPostTitle(post.title);

                    // 🔹 Ahora cargamos el contenido desde "public/posts/"
                    fetch(`/posts/${post.file}`)
                        .then((res) => res.text())
                        .then((text) => setPostContent(text))
                        .catch(() => setPostContent("# Error: No se encontró el post"));
                } else {
                    setPostContent("# Error: No se encontró el post");
                }
            })
            .catch(() => setPostContent("# Error: No se encontró el post"));
    }, [slug]);

    return (
        <>
            <div className="post-view-wrapper">
                <header>
                    <Navbar />
                </header>
                <main className="post-container">
                    <h1>{postTitle}</h1>
                    <ReactMarkdown>{postContent}</ReactMarkdown>
                </main>
                {/* <Footer /> */}
            </div>
        </>
    )
};
