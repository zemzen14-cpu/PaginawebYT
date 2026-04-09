const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const gTTS = require("gtts");
const path = require("path");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// servir archivos
app.use(express.static(__dirname));
app.use(express.json());

// 🔊 GENERAR VOZ
app.get("/voz", (req, res) => {
    const texto = req.query.text;

    if (!texto) {
        return res.status(400).send("Texto vacío");
    }

    const file = "voz.mp3";

    const gtts = new gTTS(texto, "es");
    gtts.save(file, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send("Error generando voz");
        }
        res.download(file, () => {
            fs.unlinkSync(file);
        });
    });
});

// 💬 CHAT
io.on("connection", (socket) => {
    console.log("Usuario conectado");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("Usuario desconectado");
    });
});

// 🚀 SERVER
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Servidor en puerto " + PORT);
});
