import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";

const wavesurfer = WaveSurfer.create({
  container: document.body,
  waveColor: "rgb(200, 0, 200)",
  progressColor: "rgb(100, 0, 100)",
  url: "./audio/POPARRANGE116DMINOR[DEMO].mp3",
});

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.dataset.src; // берём путь из data-src
    wavesurfer.load(src); // загружаем новый трек
    wavesurfer.on("ready", () => wavesurfer.play()); // автостарт при готовности
  });
});

wavesurfer.on("click", () => {
  wavesurfer.play();
});
