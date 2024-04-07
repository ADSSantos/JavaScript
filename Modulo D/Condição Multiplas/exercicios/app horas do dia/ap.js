function carregar() {
    var m = document.getElementById("m")
    var txt = document.getElementById("txt");
    var img = document.getElementById("imagem");  
    var data = new Date();
    var hora = data.getHours();
    txt.innerHTML = `Agora são ${hora} horas `;
  

   // var hora =14

    if (hora >= 0 && hora < 12) {
        m.innerHTML = "Boa Dia"
        img.src = "img/fotomanha.jpg"; 
        document.body.style.background = "#f1af59"
    } else if (hora >= 12 && hora < 18) {
        m.innerHTML = "Boa Tarde"
        img.src = "img/fototarde.jpg"; 
        document.body.style.background = "#6495ed"
    } else {
        m.innerHTML = "Boa noite"
        img.src = "img/fotonoite.jpg"; 
        document.body.style.background = "#ed7f64"
    }
}