const express = require("express");
const path = require("path");

const app = express();

// 🔥 Servir archivos estáticos (index.html, style.css, script.js)
app.use(express.static(path.join(__dirname)));

// 🔥 Ruta de prueba (para verificar que el server está vivo)
app.get("/health", (req, res) => {
    res.send("OK 🚀");
});

// 🔥 Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send("❌ Página no encontrada");
});

// 🔥 Puerto dinámico obligatorio para Render
const PORT = process.env.PORT || 3000;

// 🔥 Iniciar servidor (IMPORTANTE: 0.0.0.0)
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🔥 Servidor corriendo en puerto ${PORT}`);
});
