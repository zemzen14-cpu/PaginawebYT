const express = require("express");
const ytdl = require("@distube/ytdl-core");
const fs = require("fs");
const gTTS = require("gtts");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

// 🔥 MP3
app.get("/mp3", async (req, res) => {
    const url = req.query.url;

    if (!ytdl.validateURL(url)) {
        return res.send("❌ URL inválida");
    }

    const file = "audio.mp3";

    try {
        const stream = ytdl(url, { filter: "audioonly" });
        const write = fs.createWriteStream(file);

        stream.pipe(write);

        write.on("finish", () => {
            res.download(file, () => {
                fs.unlinkSync(file);
            });
        });

    } catch (err) {
        res.send("❌ Error al convertir MP3");
    }
});

// 🎬 MP4
app.get("/mp4", async (req, res) => {
    const url = req.query.url;

    if (!ytdl.validateURL(url)) {
        return res.send("❌ URL inválida");
    }

    const file = "video.mp4";

    try {
        const stream = ytdl(url, { filter: "audioandvideo" });
        const write = fs.createWriteStream(file);

        stream.pipe(write);

        write.on("finish", () => {
            res.download(file, () => {
                fs.unlinkSync(file);
            });
        });

    } catch (err) {
        res.send("❌ Error al convertir MP4");
    }
});

// 🔊 VOZ REAL (SIN API)
app.get("/voz", (req, res) => {
    const texto = req.query.texto;

    if (!texto) return res.send("❌ sin texto");

    const file = "voz.mp3";

    const gtts = new gTTS(texto, "es");

    gtts.save(file, () => {
        res.download(file, () => {
            fs.unlinkSync(file);
        });
    });
});

app.listen(PORT, () => {
    console.log("🔥 Servidor activo en puerto " + PORT);
});
