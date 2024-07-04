var memes = document.querySelectorAll("button")
var ouvido = document.getElementById("som")


memes.forEach(au => {
    au.addEventListener('click', e => {
        e.preventDefault();
        ouvido.src = "sons" + au.dataset.bari + ".mp3";
        ouvido.play();
    })

});
document.addEventListener('keypress', (lixo) => {
    memes.forEach(au => {
        var p = au.innerHTML;
        var tecla = lixo.key;
        if (tecla == p) {
            ouvido.src = "sons" + au.dataset.bari + ".mp3";
            ouvido.play();
        }
    })
})