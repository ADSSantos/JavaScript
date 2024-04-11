function calcular(){
   let data = new Date()
   let ano = data.getFullYear()
   let formulario = document.getElementById("idade")
   let result = document.getElementById("result")

   if (formulario.value.length == 0 || formulario.value > ano) {
        window.alert("[ERROR] Invalid")
   } else {
    let sexo = document.getElementsByName("sexo")
    let idade = ano - Number(formulario.value)
    let genero = ""

    let img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (sexo [0].checked) {
        genero = "Homem"
        if ( idade >= 0 && idade <= 10){
            //criança
            img.setAttribute("src","criança.jpg")

        } else if (idade  < 21){
            //jovem

        } else if (idade > 50) {
            //adulto

        } else{
                //idoso
        }
    } else if(sexo [1].checked) {
        genero = "Mulher"
    }
    result.innerHTML =  `Detectamos ${genero} com ${idade} anos`
    result.appendChild(img)
    img.style.marginTop = "60px";
   }
}






















window.addEventListener("resize", function() {
    if (window.innerWidth > 900) {
        this.window.resizeTo(900, window.innerHeight);
    }

});