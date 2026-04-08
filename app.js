const express = require("express");
const ytdl = require("@distube/ytdl-core");
const fs = require("fs");
const path = require("path");
const gTTS = require("gtts");

const app = express();

// servir frontend
app.use(express.static(__dirname));

// puerto Render
const PORT = process.env.PORT || 3000;

/* =========================
   🎧 MP3
========================= */
app.get("/mp3", async (req, res) => {
    const url = req.query.url;

    if (!url || !ytdl.validateURL(url)) {
        return res.send("❌ URL inválida");
    }

    const file = "audio.mp3";

    try {
        const stream = ytdl(url, { filter: "audioonly" });

        const writeStream = fs.createWriteStream(file);

        stream.pipe(writeStream);

        writeStream.on("finish", () => {
            res.download(file, () => {
                fs.unlinkSync(file);
            });
        });

    } catch (err) {
        console.log(err);
        res.send("❌ Error al convertir MP3");
    }
});

/* =========================
   🎬 MP4
========================= */
app.get("/mp4", async (req, res) => {
    const url = req.query.url;

    if (!url || !ytdl.validateURL(url)) {
        return res.send("❌ URL inválida");
    }

    const file = "video.mp4";

    try {
        const stream = ytdl(url, { quality: "18" });

        const writeStream = fs.createWriteStream(file);

        stream.pipe(writeStream);

        writeStream.on("finish", () => {
            res.download(file, () => {
                fs.unlinkSync(file);
            });
        });

    } catch (err) {
        console.log(err);
        res.send("❌ Error al convertir MP4");
    }
});

/* =========================
   🔊 VOZ (GTTS REAL)
========================= */
app.get("/voz", async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.send("❌ Texto vacío");
    }

    const file = "voz.mp3";

    try {
        const gtts = new gTTS(texto, "es");

        gtts.save(file, () => {
            res.download(file, () => {
                fs.unlinkSync(file);
            });
        });

    } catch (err) {
        console.log(err);
        res.send("❌ Error generando voz");
    }
});

/* ========================= */
app.listen(PORT, () => {
    console.log("🔥 Servidor activo en puerto " + PORT);
});
