// 🔥 obtener ID
function getID(url) {
    const reg = /(?:v=|youtu\.be\/)([^&]+)/;
    const match = url.match(reg);
    return match ? match[1] : null;
}

// 🎧 MP3 (abre downloader real)
function downloadMP3() {
    const url = document.getElementById("url").value.trim();
    const id = getID(url);

    if (!id) return alert("❌ Link inválido");

    // 🔥 usa loader real web
    window.open(`https://y2mate.nu/en/download?url=https://youtu.be/${id}`, "_blank");
}

// 🎬 MP4
function downloadMP4() {
    const url = document.getElementById("url").value.trim();
    const id = getID(url);

    if (!id) return alert("❌ Link inválido");

    window.open(`https://y2mate.nu/en/download?url=https://youtu.be/${id}`, "_blank");
}

// 🔊 VOZ REAL (sin errores)
function voz() {
    const texto = document.getElementById("texto").value.trim();

    if (!texto) return alert("⚠️ escribe algo");

    // 🔥 TTS funcional
    const url = `https://api.streamelements.com/kappa/v2/speech?voice=Conchita&text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}
