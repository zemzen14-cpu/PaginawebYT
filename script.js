function downloadMP3() {
    const url = document.getElementById('url').value;

    if (!url) {
        alert("⚠️ Pega un link de YouTube");
        return;
    }

    window.open(`/mp3?url=${encodeURIComponent(url)}`, '_blank');
}

function downloadMP4() {
    const url = document.getElementById('url').value;

    if (!url) {
        alert("⚠️ Pega un link de YouTube");
        return;
    }

    window.open(`/mp4?url=${encodeURIComponent(url)}`, '_blank');
}

// EXTRA: voz (opcional si quieres)
function voz() {
    const texto = document.getElementById('texto').value;

    if (!texto) {
        alert("⚠️ Escribe algo primero");
        return;
    }

    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "es-ES";
    speech.rate = 1;

    speechSynthesis.speak(speech);
}
