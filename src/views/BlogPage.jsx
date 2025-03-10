import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/blog-page.scss";
import { Navbar } from "../components/Navbar";
import { SpinnerBlack } from "../components/SpinnerBlack";
import { API_BASE_URL } from "../utils/config.js";




export const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    // const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    // const postsJsonUrl = `https://www.googleapis.com/drive/v3/files/${JSON_ID}?alt=media&key=${API_KEY}`;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        fetch(`${API_BASE_URL}/posts`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                // localStorage.setItem("postsData", JSON.stringify(data));
                setPosts(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error cargando posts:", err);
                setError(err.message);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="blog-page-wrapper">
            <header>
                <Navbar />
            </header>
            <div className="container blog-list">
                <h1>📝 Blog de ChiliSites</h1>
                {!isLoading ? <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
                    :
                    <SpinnerBlack />
                }
            </div>
        </div>
    )
}