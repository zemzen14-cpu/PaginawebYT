async function downloadMP3() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("❌ Pon un link");
        return;
    }

    try {
        const api = `https://api.vevioz.com/api/button/mp3/${encodeURIComponent(url)}`;
        window.open(api, "_blank");
    } catch (e) {
        alert("❌ Error al convertir MP3");
    }
}

async function downloadMP4() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("❌ Pon un link");
        return;
    }

    try {
        const api = `https://api.vevioz.com/api/button/mp4/${encodeURIComponent(url)}`;
        window.open(api, "_blank");
    } catch (e) {
        alert("❌ Error al convertir MP4");
    }
}

function voz() {
    const texto = document.getElementById("texto").value;

    if (!texto) {
        alert("❌ Escribe texto");
        return;
    }

    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(texto)}&tl=es&client=tw-ob`;

    const audio = new Audio(url);
    audio.play();
}
