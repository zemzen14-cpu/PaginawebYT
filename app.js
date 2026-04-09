const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// servir archivos (index.html, script.js, style.css)
app.use(express.static(__dirname));

// conexión de usuarios
io.on("connection", (socket) => {
  console.log("🟢 Usuario conectado");

  // recibir mensaje
  socket.on("mensaje", (msg) => {
    io.emit("mensaje", msg); // enviar a todos
  });

  socket.on("disconnect", () => {
    console.log("🔴 Usuario desconectado");
  });
});

// puerto obligatorio para Render
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("🔥 Chat activo en puerto " + PORT);
});
// update render fix
