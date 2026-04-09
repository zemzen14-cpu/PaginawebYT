const socket = io();

// 💬 ENVIAR MENSAJE
function enviarMensaje() {
    const input = document.getElementById("mensaje");
    const msg = input.value;

    if (!msg) return;

    socket.emit("chat message", msg);
    input.value = "";
}

// 💬 RECIBIR MENSAJE
socket.on("chat message", (msg) => {
    const chat = document.getElementById("chat");
    const p = document.createElement("p");
    p.textContent = msg;
    chat.appendChild(p);

    chat.scrollTop = chat.scrollHeight;
});

// 🔊 VOZ
function generarVoz() {
    const texto = document.getElementById("texto").value;

    if (!texto) return alert("Escribe algo");

    window.location.href = `/voz?text=${encodeURIComponent(texto)}`;
}
