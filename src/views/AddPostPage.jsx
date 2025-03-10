import { useEffect, useState } from "react";
import { signInWithGoogle, signOutFromGoogle, uploadFileToDrive, updateJsonFileInDrive } from "../utils/googleAuth";
import { API_BASE_URL } from "../utils/config";

export const AddPostPage = () => {
    const [newPost, setNewPost] = useState({
        title: "",
        slug: "",
        content: "",
        date: "",
        id_google: "",
        coverGoogleId: "",
    });

    const [readyToSubmit, setReadyToSubmit] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        setReadyToSubmit(
            Boolean(newPost.title && newPost.slug && newPost.content && newPost.date && newPost.coverGoogleId)
        );
    }, [newPost]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setNewPost((prev) => ({
            ...prev,
            [id]: value,
        }))
    }


    const handleSubmit = async (e) => {
        console.log("🚀 Subiendo post...");
        e.preventDefault();

        if (!accessToken) {
            alert("❌ Debes iniciar sesión con Google");
            return;
        }

        console.log("📤 Subiendo post a Google Drive...");

        const markdownContent = `# ${newPost.title}\n\n${newPost.content}`;
        const markdownFile = new Blob([markdownContent], { type: "text/markdown" });

        const markdownGoogleId = await uploadFileToDrive(
            accessToken,
            new File([markdownFile], `${newPost.slug}.md`),
            process.env.REACT_APP_BLOG_POSTS_FOLDER_ID);

        if (!markdownGoogleId) {
            alert("❌ Error al subir el post");
            return;
        }

        console.log("✅ Post Markdown creado en drive con éxito, id:", markdownGoogleId);

        const updatedPost = {
            title: newPost.title,
            slug: newPost.slug,
            date: newPost.date,
            id_google: markdownGoogleId,
            cover_google_id: newPost.coverGoogleId || null, // Se añadirá manualmente en Drive
        };

        // console.log("objeto para la api:", updatedPost);

        console.log("📌 Enviando post (objeto) al backend...");

        try {
            const response = await fetch(`${API_BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedPost),
            });

            const responseData = await response.json();
            console.log(responseData)

            if (!response.ok) throw new Error(`Error ${response.status}: ${responseData.error || response.statusText}`);

            console.log("✅ La API respondió OK. Post guardado en la base de datos");
            alert("✅ Post publicado con éxito");
            setNewPost({
                title: "",
                slug: "",
                content: "",
                date: "",
                id_google: "",
                coverGoogleId: "",
            });
            handleGoogleLogout();
            // aquí necesito que los campos del form queden todos en blanco
        } catch (error) {
            console.error("❌ Error al guardar el post:", error);
            alert("❌ Hubo un error al guardar el post");
        }


        alert("✅ Post publicado con éxito");
    };

    const handleGoogleLogin = async () => {
        const token = await signInWithGoogle();
        if (token) {
            setAccessToken(token);
            console.log("✅ Usuario autenticado con Google");
        } else {
            console.error("❌ Error en la autenticación con Google");
        }
    };

    const handleGoogleLogout = async () => {
        await signOutFromGoogle();
        setAccessToken(null);
    };




    return (
        <div className="container">
            <h1>Crear nuevo post:</h1>
            {!accessToken ? (
                <button onClick={handleGoogleLogin} className="btn btn-primary mb-3">
                    Iniciar sesión con Google
                </button>
            ) : (
                <>
                    <p className="text-success">✅ Usuario autenticado</p>
                    <button onClick={handleGoogleLogout} className="btn btn-danger mb-3">
                        Cerrar sesión
                    </button>
                </>
            )}
            <form style={{ marginBottom: "100px" }}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                        placeholder="Título de post"
                        onChange={handleChange}
                        value={newPost.title}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="slug" className="form-label">Slug (ejemplo: chile-campeon-del-mundo)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="slug"
                        placeholder="chilisites.com/blog/..."
                        onChange={handleChange}
                        value={newPost.slug}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Contenido</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="content"
                        placeholder="Insertar el markdown crudo..."
                        rows="20"
                        onChange={handleChange}
                        value={newPost.content}
                        ></textarea>
                    <p style={{ color: "red" }}><strong style={{ color: "black" }}>Img src:</strong> {'<img src="https://lh3.googleusercontent.com/d/ID_DE_GOOGLE" />'}
                    </p>
                </div>
                <div className="mb-3">
                    <label htmlFor="cover">Cover Photo google ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="coverGoogleId"
                        placeholder="1ods9lcOezIEEtaakeAieUyoGIARcMWAe"
                        onChange={handleChange} 
                        value={newPost.coverGoogleId}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Fecha</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="chilisites.com/blog/..."
                        rows="20"
                        onChange={handleChange}
                        value={newPost.date}
                        />
                </div>

                <button
                    type="submit"
                    className={readyToSubmit ? "btn btn-success" : "btn btn-danger"}
                    disabled={!readyToSubmit}
                    onClick={handleSubmit}
                >
                    Subir
                </button>
            </form>
        </div>
    )
}