import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../utils/config.js";

export const RecientPosts = () => {
    const [last3Posts, setLast4Posts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/posts?limit=3&order=desc`)
            .then((res) => {
                if (!res.ok) throw new Error("Error al cargar los posts");
                return res.json();
            })
            .then((data) => {
                setLast4Posts(data);
                setisLoading(false);
            })
            .catch((error) => {
                console.error("Error cargando posts:", error);
                setError(error.message);
                setisLoading(false);
            });
    }, []);


    return (
        <aside className="position-sticky">
            <h4 className="fst-italic">Artículos recientes</h4>
            <ul className="list-unstyled">

                {last3Posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            to={`/blog/${post.slug}`}
                            className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                        >
                            {/* Placeholder para imagen, puedes cambiarlo por post.image si tienes */}
                            <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#777"></rect>
                            </svg>
                            <div className="col-lg-8">
                                <h6 className="mb-0">{post.title}</h6>
                                <small className="text-body-secondary">{new Date(post.date).toLocaleDateString()}</small>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}