function downloadMP3() {
    const url = document.getElementById("url").value;
    window.open(`/mp3?url=${encodeURIComponent(url)}`, "_blank");
}

function downloadMP4() {
    const url = document.getElementById("url").value;
    window.open(`/mp4?url=${encodeURIComponent(url)}`, "_blank");
}

function voz() {
    const texto = document.getElementById("texto").value;
    window.open(`/voz?texto=${encodeURIComponent(texto)}`, "_blank");
}
