// 🔥 Obtener ID del video
function getVideoID(url) {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// 🎧 MP3
function downloadMP3() {
    const url = document.getElementById("url").value.trim();

    if (!url) {
        alert("⚠️ Pega un link");
        return;
    }

    const id = getVideoID(url);

    if (!id) {
        alert("❌ Link inválido");
        return;
    }

    // 🔥 API externa (SIEMPRE FUNCIONA)
    window.open(`https://api.vevioz.com/api/button/mp3/${id}`, "_blank");
}

// 🎬 MP4
function downloadMP4() {
    const url = document.getElementById("url").value.trim();

    if (!url) {
        alert("⚠️ Pega un link");
        return;
    }

    const id = getVideoID(url);

    if (!id) {
        alert("❌ Link inválido");
        return;
    }

    window.open(`https://api.vevioz.com/api/button/videos/${id}`, "_blank");
}

// 🔊 VOZ DESCARGABLE (gtts estilo)
function voz() {
    const texto = document.getElementById("texto").value.trim();

    if (!texto) {
        alert("⚠️ Escribe texto");
        return;
    }

    // descarga directa
    window.open(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(texto)}&tl=es&client=tw-ob`, "_blank");
}
