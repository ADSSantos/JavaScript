// Função chamada ao clicar no botão "Iniciar Contagem"
function clicar() {
    // Obtém os elementos de entrada e o elemento de resultado
    const inpInicio = document.getElementById("inicio");
    const inpFim = document.getElementById("fim");
    const inpPasso = document.getElementById("passo");
    const result = document.getElementById("result");
    const sec = document.getElementById("sec");
    
    // Verifica se algum dos campos está vazio
    if (inpInicio.value.length === 0 || inpFim.value.length === 0 || inpPasso.value.length === 0) {
        alert("[ERRO] Caixas de entradas não podem estar vazias!"); // Alerta se algum campo estiver vazio
        return;
    }

    // Converte os valores de entrada para números
    const inicio = Number(inpInicio.value);
    const fim = Number(inpFim.value);
    const passo = Number(inpPasso.value);

    // Verifica se o passo é válido
    if (passo <= 0) {
        alert("Passo deve ser maior que zero!"); // Alerta se o passo for inválido
        return;
    }

    // Limpa o conteúdo anterior do resultado
    result.innerHTML = "Contando...";

    // Loop para gerar a contagem de acordo com os valores fornecidos
    for (let c = inicio; c <= fim; c += passo) {
        result.innerHTML += `${c} `; // Adiciona cada número ao resultado
    }

    // Estiliza o resultado (pode ser movido para o CSS)
    result.style.fontSize = "20px";
    result.style.color = "green";
    sec.style.height = "500px";
}

// Função chamada ao clicar no botão "Limpar"
function limpar() {
    // Obtém os elementos de resultado e entrada
    const result = document.getElementById("result");
    const inpInicio = document.getElementById("inicio");
    const inpFim = document.getElementById("fim");
    const inpPasso = document.getElementById("passo");

    // Limpa o conteúdo do resultado e os campos de entrada
    result.innerHTML = ""; 
    inpInicio.value = "";
    inpFim.value = "";
    inpPasso.value = "";
}
