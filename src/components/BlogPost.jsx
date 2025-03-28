import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// import "../styles/blog.css";

export const BlogPost = ({ postFile }) => {
    const [post, setPost] = useState("");

    useEffect(() => {
        fetch(postFile)
            .then((res) => res.text())
            .then((text) => setPost(text));
    }, [postFile]);

    return (
        <div className="blog-article">
            <ReactMarkdown>{post}</ReactMarkdown>
        </div>
    );
};