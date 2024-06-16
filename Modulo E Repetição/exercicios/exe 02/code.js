//Função para executar as açoes.
function contar(){
    //Capturando os elementos de entrada via ID'S
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let result = document.getElementById("result")
  

    //verificando se nao há entras em branco-
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Preencha os campos")

    } else {
        result.innerHTML = "Contando.."
        //Convertendo as entradas de texto para numero.
        let i_nicio = Number(inicio.value)
        let f_im = Number(fim.value)
        let p_asso = Number(passo.value)

        if(p_asso <= 0) {
            alert("[Valor invalido] Inicie o passo com valor 1")

        }
    
    //contagem crescente   
    if(i_nicio < f_im) {
        for(let contador = i_nicio; contador <= f_im; contador += p_asso) {
        result.innerHTML +=  `${contador} \u{1F449}`  
        
        }
    }else{
        //contagem regresiva
        for(let contador = i_nicio; contador >= f_im; contador -= p_asso) {
            result.innerHTML +=  `${contador}\u{1F449}`

        }
    }
    result.innerHTML +=  `\u{1F3C1}`    
            
          
        

    }

}
