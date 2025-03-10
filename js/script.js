document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("AudioMusic");
    audio.volume = 0.05;

    document.body.addEventListener("click", () => {
        audio.muted = false;
        audio.play();
    }, { once: true });
});



document.querySelector(".Change").addEventListener("click",()=>{
    cambiarCSS()
    cambiarCancion()
})

function cambiarCSS() {
    let link = document.getElementById("Estilos");
    if (link.getAttribute("href") === "css/indexCss.css") {
        link.setAttribute("href", "css/indexCss2.css");
    } else {
        link.setAttribute("href", "css/indexCss.css");
    }
}
function cambiarCancion(){
    let audio = document.getElementById("AudioMusic");
    if (audio.getAttribute("src") === "src/FlyMeto theMoon.mp3") {
        audio.setAttribute("src", "src/Littleroot.mp3");
        audio.play();
    } else {
        audio.setAttribute("src", "src/FlyMeto theMoon.mp3");
        audio.play();
    }
}









//Control Volumen
document.getElementById("Mute").addEventListener("click",() =>{
    const audio = document.getElementById("AudioMusic");
    const iconMute = document.getElementById("Mute");
    if(audio.volume === 0){
        audio.volume = 0.05;
        iconMute.className = "bx bxs-volume-full"
    }else{
        audio.volume = 0;
        iconMute.className = "bx bxs-volume-mute"
    }
})