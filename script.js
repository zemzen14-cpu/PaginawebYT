async function downloadMP3() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("⚠️ Pega un link");
        return;
    }

    showLoading("Convirtiendo MP3...");

    try {
        const link = `https://api.cobalt.tools/api/json`;

        const res = await fetch(link, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: url,
                vCodec: "h264",
                vQuality: "720",
                aFormat: "mp3"
            })
        });

        const data = await res.json();

        hideLoading();

        if (data.url) {
            window.open(data.url, "_blank");
        } else {
            alert("❌ No se pudo convertir");
        }

    } catch (err) {
        hideLoading();
        alert("❌ Error real de servidor");
    }
}


async function downloadMP4() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("⚠️ Pega un link");
        return;
    }

    showLoading("Convirtiendo MP4...");

    try {
        const link = `https://api.cobalt.tools/api/json`;

        const res = await fetch(link, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: url,
                vCodec: "h264",
                vQuality: "720"
            })
        });

        const data = await res.json();

        hideLoading();

        if (data.url) {
            window.open(data.url, "_blank");
        } else {
            alert("❌ No se pudo convertir");
        }

    } catch (err) {
        hideLoading();
        alert("❌ Error real de servidor");
    }
}
