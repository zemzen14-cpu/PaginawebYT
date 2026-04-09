const express = require("express");
const path = require("path");
const gTTS = require("gtts");

const app = express();

// para leer datos del frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// servir archivos estáticos
app.use(express.static(__dirname));

// ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 🔊 GENERAR VOZ
app.post("/voz", (req, res) => {
  const texto = req.body.texto;

  if (!texto) {
    return res.status(400).send("Texto vacío");
  }

  const archivo = "voz.mp3";
  const gtts = new gTTS(texto, "es");

  gtts.save(archivo, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error generando voz");
    }

    res.download(archivo);
  });
});

// puerto render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🔥 Servidor activo en puerto " + PORT);
});
