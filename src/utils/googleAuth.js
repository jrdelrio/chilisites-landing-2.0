import { gapi } from "gapi-script";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
// const SCOPES = "https://www.googleapis.com/auth/drive.file";
const SCOPES = "https://www.googleapis.com/auth/drive";

export const initGoogleAuth = () => {
    return new Promise((resolve, reject) => {
        gapi.load("client:auth2", () => {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                })
                .then(() => {
                    const authInstance = gapi.auth2.getAuthInstance();
                    resolve(authInstance);
                })
                .catch((error) => reject(error));
        });
    });
};

export const signInWithGoogle = async () => {
    try {
        const authInstance = await initGoogleAuth();
        const user = await authInstance.signIn();
        return user.getAuthResponse().access_token;
    } catch (error) {
        console.error("Error al iniciar sesión con Google", error);
        return null;
    }
};

export const signOutFromGoogle = async () => {
    const authInstance = gapi.auth2.getAuthInstance();
    await authInstance.signOut();
    console.log("🔴 Usuario cerró sesión en Google");
};

/**
 * 🔹 Sube archivos a Google Drive (imágenes o posts .md)
 * @param {string} accessToken - Token de autenticación de Google
 * @param {File} file - Archivo a subir
 * @param {string} folderId - ID de la carpeta en Google Drive
 * @returns {Promise<string>} - Devuelve el ID del archivo en Google Drive
 */

export const uploadFileToDrive = async (accessToken, file, folderId) => {
    const metadata = {
        name: file.name,
        mimeType: file.type,
        parents: [folderId],
    };

    const formData = new FormData();
    formData.append(
        "metadata",
        new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    formData.append("file", file);

    try {
        const response = await fetch(
            "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: formData,
            }
        );

        const data = await response.json();
        if (!response.ok) throw new Error("Error al subir archivo a google drive");

        console.log("✅ Archivo subido a Drive", data);

        // 🔹 2. Configurar permisos públicos
        const permissionResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files/${data.id}/permissions`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    role: "reader",
                    type: "anyone",
                }),
            }
        );

        if (!permissionResponse.ok) throw new Error("Error al configurar permisos");

        console.log("✅ Permisos públicos otorgados al archivo");

        return data.id; // 🔹 Devuelve el ID del archivo en Google Drive

    } catch (error) {
        console.error("❌ Error al subir archivo a Google Drive:", error);
        return null;
    }
};

export const updateJsonFileInDrive = async (accessToken, newPost) => {
    const JSON_FILE_ID = process.env.REACT_APP_BLOG_JSON_FILE_ID; // ID del archivo JSON en Google Drive
    const API_URL = `https://www.googleapis.com/drive/v3/files/${JSON_FILE_ID}?alt=media&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

    try {
        // 🔹 1. Obtener el JSON existente
        const response = await fetch(API_URL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("❌ Error al obtener el JSON existente");
        }

        let jsonData = await response.json();
        console.log("📥 JSON actual descargado:", jsonData);

        if (!Array.isArray(jsonData)) {
            throw new Error("❌ El JSON no tiene un formato válido");
        }

        // 🔹 2. Agregar el nuevo post
        jsonData.push(newPost);
        console.log("📌 Nuevo JSON actualizado:", jsonData);

        // 🔹 3. Convertir a Blob (archivo JSON)
        const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], {
            type: "application/json",
        });

        // 🔹 4. Subir el nuevo JSON sobrescribiendo el existente en Google Drive
        const formData = new FormData();
        formData.append(
            "metadata",
            new Blob([JSON.stringify({name: "posts.json"})], { type: "application/json" })
        );
        formData.append("file", jsonBlob);

        const uploadUrl = `https://www.googleapis.com/upload/drive/v3/files/${JSON_FILE_ID}?uploadType=multipart`;

        const uploadResponse = await fetch(uploadUrl, {
            method: "PATCH", // ⚠ Sobreescribir archivo existente
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
        });

        if (!uploadResponse.ok) {
            throw new Error("❌ Error al actualizar el JSON en Google Drive");
        }

        console.log("✅ JSON actualizado en Google Drive");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
