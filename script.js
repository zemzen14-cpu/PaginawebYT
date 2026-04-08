function downloadMP3() {
    const url = document.getElementById("url").value;

    if (!url) return alert("Pon un link");

    // 🔥 usa servicio externo
    window.open(`https://y2mate.nu/en-qYCC/?url=${encodeURIComponent(url)}`, "_blank");
}

function downloadMP4() {
    const url = document.getElementById("url").value;

    if (!url) return alert("Pon un link");

    window.open(`https://y2mate.nu/en-qYCC/?url=${encodeURIComponent(url)}`, "_blank");
}

function voz() {
    const texto = document.getElementById("texto").value;

    if (!texto) return alert("Escribe algo");

    window.open(`/voz?texto=${encodeURIComponent(texto)}`, "_blank");
}
