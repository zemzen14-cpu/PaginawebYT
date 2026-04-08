// 🔥 Obtener URL del input
function getURL() {
    const url = document.getElementById("url").value.trim();

    if (!url) {
        alert("⚠️ Pega un link primero");
        return null;
    }

    return encodeURIComponent(url);
}

// 🎧 DESCARGAR MP3
function downloadMP3() {
    const url = getURL();
    if (!url) return;

    // abre descarga en otra pestaña
    window.open(`/mp3?url=${url}`, "_blank");
}

// 🎬 DESCARGAR MP4
function downloadMP4() {
    const url = getURL();
    if (!url) return;

    window.open(`/mp4?url=${url}`, "_blank");
}

// 🔊 GENERAR VOZ
function voz() {
    const texto = document.getElementById("texto").value.trim();

    if (!texto) {
        alert("⚠️ Escribe un texto primero");
        return;
    }

    // API simple de voz (Google TTS)
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(texto)}&tl=es&client=tw-ob`;

    window.open(url, "_blank");
}
