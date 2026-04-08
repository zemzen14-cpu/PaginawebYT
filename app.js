const express = require('express');
const { exec } = require('child_process');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// MP3
app.get('/mp3', (req, res) => {
    const url = req.query.url;
    if (!url) return res.send("No URL");

    const file = `audio_${Date.now()}.mp3`;

    exec(`yt-dlp -x --audio-format mp3 -o "${file}" "${url}"`, (err) => {
        if (err) return res.send("Error descargando");

        res.download(file, () => {
            require('fs').unlinkSync(file);
        });
    });
});

// MP4
app.get('/mp4', (req, res) => {
    const url = req.query.url;
    if (!url) return res.send("No URL");

    const file = `video_${Date.now()}.mp4`;

    exec(`yt-dlp -f best -o "${file}" "${url}"`, (err) => {
        if (err) return res.send("Error descargando");

        res.download(file, () => {
            require('fs').unlinkSync(file);
        });
    });
});

app.listen(PORT, () => {
    console.log(`🔥 Server en puerto ${PORT}`);
});
