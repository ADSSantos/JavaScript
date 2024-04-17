//Variaveis pra capturar as entradas e saidas da funcionalidade
let entrada = document.getElementById("entrada")
let verificar = document.getElementById("verificar")
let resut = document.getElementById("saida")



//função para calcular e verificar as condiçoes
function calcular() {

    if(entrada.value === ""){
        alert("[ERRO] Por favor insira um número valido!")
    } else if(entrada.value % 2 === 0) {
        resut.innerHTML = "O número inserido é  PAR !"
    } else {
        resut.innerHTML = "O número inserido é IMPAR !"
    }
        

}