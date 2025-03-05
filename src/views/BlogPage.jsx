import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/blog-page.scss";
import { Navbar } from "../components/Navbar";
import { Footer } from "../sections/Footer";



export const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetch("/posts/posts.json") // 🔹 Cargamos el JSON desde public/posts/
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error("Error cargando posts:", err));
    }, []);

    return (
        <div className="blog-page-wrapper">
            <header>
                <Navbar />
            </header>
            <div className="blog-list">
                <h1>📝 Blog de ChiliSites</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <Footer /> */}
        </div>
    )
}