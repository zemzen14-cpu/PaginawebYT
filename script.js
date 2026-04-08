// 🎧 MP3
async function downloadMP3() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("⚠️ Pega un link de YouTube");
        return;
    }

    // loading visual
    showLoading("Convirtiendo a MP3... 🔄");

    try {
        const api = `https://api.vevioz.com/api/button/mp3?url=${encodeURIComponent(url)}`;
        const res = await fetch(api);
        const data = await res.text();

        hideLoading();

        const win = window.open();
        win.document.write(data);

    } catch (err) {
        hideLoading();
        alert("❌ Error al convertir MP3");
    }
}

// 🎬 MP4
async function downloadMP4() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("⚠️ Pega un link de YouTube");
        return;
    }

    showLoading("Convirtiendo a MP4... 🔄");

    try {
        const api = `https://api.vevioz.com/api/button/videos?url=${encodeURIComponent(url)}`;
        const res = await fetch(api);
        const data = await res.text();

        hideLoading();

        const win = window.open();
        win.document.write(data);

    } catch (err) {
        hideLoading();
        alert("❌ Error al convertir MP4");
    }
}

// 🔊 VOZ (opcional)
function voz() {
    const texto = document.getElementById("texto").value;

    if (!texto) {
        alert("⚠️ Escribe algo primero");
        return;
    }

    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "es-ES";
    speech.rate = 1;

    speechSynthesis.speak(speech);
}

// 🔥 LOADING (extra PRO)
function showLoading(text) {
    let loader = document.getElementById("loader");

    if (!loader) {
        loader = document.createElement("div");
        loader.id = "loader";
        loader.style.position = "fixed";
        loader.style.top = "0";
        loader.style.left = "0";
        loader.style.width = "100%";
        loader.style.height = "100%";
        loader.style.background = "rgba(0,0,0,0.9)";
        loader.style.color = "white";
        loader.style.display = "flex";
        loader.style.justifyContent = "center";
        loader.style.alignItems = "center";
        loader.style.fontSize = "20px";
        loader.style.zIndex = "9999";

        document.body.appendChild(loader);
    }

    loader.innerText = text;
}

// ocultar loader
function hideLoading() {
    const loader = document.getElementById("loader");
    if (loader) loader.remove();
}
