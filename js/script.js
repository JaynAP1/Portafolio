document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("AudioMusic");
    audio.volume = 0.03;

    document.body.addEventListener("click", () => {
        audio.muted = false;
        audio.play();
    }, { once: true });
});