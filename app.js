const express = require("express");
const path = require("path");

const app = express();

// 🔥 Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 Servir frontend
app.use(express.static(path.join(__dirname)));

// 🔥 Ruta health check (Render)
app.get("/health", (req, res) => {
    res.json({ status: "ok", server: "running 🚀" });
});

// 🔥 Ruta test API
app.get("/api/status", (req, res) => {
    res.json({
        message: "API funcionando 🔥",
        time: new Date()
    });
});

// 🚫 Manejo de rutas no existentes
app.use((req, res) => {
    res.status(404).send("❌ Ruta no encontrada");
});

// 🚫 Manejo de errores global
app.use((err, req, res, next) => {
    console.error("ERROR:", err);
    res.status(500).json({
        error: "Error interno del servidor"
    });
});

// 🔥 Puerto dinámico (Render obligatorio)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("🔥 Servidor PRO corriendo en puerto " + PORT);
});
