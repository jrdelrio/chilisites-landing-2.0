const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: ["*", "http://localhost:3001", "https://chilisites.com"] }));

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.post("/send-email", async (req, res) => {
    if (!req.body) {
        console.log("no hay body");
        return res
        .status(400)
        .json({ error: "Faltan datos en el cuerpo de la solicitud" });
    }
    
    try {
        const { data, error } = await resend.emails.send(req.body);

        if (error) {
            return res.status(400).json({ error });
        }

        res.json({ data });
      
    } catch (error) {
      
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.get("/test-connection", (req, res) => {
    res.json({ message: "Servidor funcionando correctamente" });
});

const PORT = 5001; // Usa el puerto que prefieras
app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
