async function downloadMP3() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("Pon un link");
        return;
    }

    try {
        const res = await fetch(`https://api.vevioz.com/api/button/mp3?url=${encodeURIComponent(url)}`);
        const data = await res.text();

        const win = window.open();
        win.document.write(data);

    } catch (err) {
        alert("Error 😢");
    }
}

async function downloadMP4() {
    const url = document.getElementById("url").value;

    if (!url) {
        alert("Pon un link");
        return;
    }

    try {
        const res = await fetch(`https://api.vevioz.com/api/button/videos?url=${encodeURIComponent(url)}`);
        const data = await res.text();

        const win = window.open();
        win.document.write(data);

    } catch (err) {
        alert("Error 😢");
    }
}
