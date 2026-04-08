const express = require("express");
const path = require("path");

const app = express();

// servir archivos estáticos
app.use(express.static(__dirname));

// puerto obligatorio para Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("🔥 Servidor activo en puerto " + PORT);
});
