// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./views/Home.jsx";
import { BlogPage } from "./views/BlogPage.jsx";
import { PostPage } from "./views/PostPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Navbar } from "./components/Navbar";
import { Footer } from "./sections/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    // </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
