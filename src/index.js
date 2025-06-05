// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Home } from "./views/Home.jsx";
import { BlogPage } from "./views/BlogPage.jsx";
import { PostPage } from "./views/PostPage.jsx";
import { AddPostPage } from "./views/AddPostPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Footer } from "./sections/Footer";

import "./styles/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        if (footerRef.current) {
            const rect = footerRef.current.getBoundingClientRect();
            setFooterHeight(rect.height);
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<PostPage />} />
                <Route path="/add_post" element={<AddPostPage />} />
                {/* <Route path="/pagos" element={< />} /> */}
            </Routes>
            <Footer ref={footerRef} />
        </BrowserRouter>
    );
};

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
