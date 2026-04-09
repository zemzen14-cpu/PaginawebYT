function voz() {
  const texto = document.getElementById("texto").value;

  if (!texto) {
    alert("Escribe algo");
    return;
  }

  fetch("/voz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ texto })
  })
    .then(res => {
      if (!res.ok) throw new Error("Error");
      return res.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "voz.mp3";
      a.click();
    })
    .catch(() => {
      alert("Error generando voz");
    });
}
