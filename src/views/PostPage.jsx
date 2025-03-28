import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { Navbar } from "../components/Navbar";
import { RecientPosts } from "../components/RecientPosts";
import { API_BASE_URL } from "../utils/config.js";
import { SpinnerBlack } from "../components/SpinnerBlack.jsx";
import "../styles/post-page.scss";



export const PostPage = () => {
    const { slug } = useParams();
    const [postContent, setPostContent] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    const JSON_ID = process.env.REACT_APP_GOOGLE_JSON_ID;
    const postsJsonUrl = `https://www.googleapis.com/drive/v3/files/${JSON_ID}?alt=media&key=${API_KEY}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setIsLoading(true);

        console.log("🔄 Cargando posts desde API");
        fetch(`${API_BASE_URL}/posts/${slug}`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((post) => {
                setPostTitle(post.title);

                if (!post.id_google) {
                    throw new Error("Este post no tiene contenido en Google Drive.");
                }

                const markdownFileUrl = `https://www.googleapis.com/drive/v3/files/${post.id_google}?alt=media&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

                return fetch(markdownFileUrl);
            })
            .then((res) => {
                if (!res.ok) throw new Error("Error al cargar el archivo Markdown.");
                return res.text();
            })
            .then((text) => {
                console.log("✅ Markdown cargado con éxito");
                setPostContent(text);
                setIsLoading(false);
            })

            .catch((err) => {
                console.error("🚨 Error:", err);
                setError(err.message);
                setIsLoading(false);
            });
    }, [slug]);

    return (
        <>
            <div className="post-view-wrapper">
                <header>
                    <Navbar />
                </header>
                <div className="container post-container">
                    <div className="row">
                        <main className="col-md-8" style={isLoading ? {alignContent: "center"} : {} }>
                            {isLoading ? (
                                <div className="spinner-container">
                                    <SpinnerBlack />
                                </div>
                            ) : error ? (
                                <p className="error">⚠ {error}</p>
                            ) : (
                                <>
                                    {/* <h1 className="post-title">{postTitle}</h1> */}
                                    <div className="post-content">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {postContent}
                                        </ReactMarkdown>
                                    </div>
                                </>
                            )}
                        </main>
                        <div className="col-md-4">
                            <RecientPosts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
