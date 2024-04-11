const idadeInput = document.getElementById("idade")


function calcularIdade() {
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked')
    let anoNascimento = parseInt(document.getElementById("idade").value);
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let result = document.getElementById("result");
    let idade = anoAtual - anoNascimento;

  
    if (sexoSelecionado) {
        let sexo = sexoSelecionado.id ==="sexo_m" ? "Masculino" : "Feminino";
        result.innerHTML = "Você tem " + idade + " anos sexo " + sexo ;
    } else {
        result.innerHTML = "Você tem " + idade + " anos";
    }
}























window.addEventListener("resize", function() {
    if (window.innerWidth > 900) {
        this.window.resizeTo(900, window.innerHeight);
    }

});