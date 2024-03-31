function calc() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var result = document.getElementById("result");
  var media = ((nota1 + nota2) / 2).toFixed(1);
  
  if (media >=7) {
    result.innerHTML = " APROVADO!!! Média: " + media;
} else {
    result.innerHTML = " REPROVADO!!! Média: " + media;
}
  
}