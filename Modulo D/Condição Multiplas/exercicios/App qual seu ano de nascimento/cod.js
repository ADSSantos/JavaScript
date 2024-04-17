function calcular() {
   
    // Obtém a data atual
    let data = new Date();

    // Obtém o ano atual a partir da data
    let ano = data.getFullYear();

    // Obtém o elemento de input do formulário com o id "idade"
    let formulario = document.getElementById("idade");

    // Obtém o elemento onde o resultado será exibido com o id "result"
    let result = document.getElementById("result");

    // Verifica se o campo de idade está vazio ou se contém um valor inválido (maior que o ano atual)
    if (formulario.value.length == 0 || formulario.value > ano) {
        // Se o campo de idade estiver vazio ou contiver um valor inválido, exibe uma mensagem de alerta
        window.alert("[ERROR] Invalid");
    } else {
        // Obtém a coleção de elementos de input com o nome "sexo"
        let sexo = document.getElementsByName("sexo");

        // Calcula a idade subtraindo o ano de nascimento informado do ano atual
        let idade = ano - Number(formulario.value);

        // Variável para armazenar o gênero (Homem ou Mulher)
        let genero = "";

        // Cria um elemento de imagem
        let img = document.createElement("img");

        // Define o atributo id da imagem como "foto"
        img.setAttribute("id", "foto");

       
        // Verifica se o primeiro elemento de sexo (Masculino) está marcado
        if (sexo[0].checked) {
            // Se o primeiro elemento de sexo estiver marcado, define o gênero como "Homem"
            genero = "Homem";

            // Verifica a faixa etária do homem
            if (idade >= 8 && idade <= 12) {
                // Se a idade estiver entre 0 e 10 anos, exibe uma imagem de criança
               
               
                img.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/008/138/052/large_2x/nerdy-boy-cartoon-character-free-vector.jpg");
                


            } else if ( idade < 18) {
                // Se a idade for menor que 21 anos, é considerado jovem
                // Nenhuma ação específica é tomada para esta faixa etária
                img.setAttribute("src", "https://png.pngtree.com/png-vector/20220513/ourmid/pngtree-boy-schoolboy-kid-poses-vector-png-image_4617638.png")

            } else if (idade < 30) {
                // Se a idade for menor que 30 anos, é considerado jovem
                 img.setAttribute("src", "https://th.bing.com/th?id=OIF.x87%2bJXhIjhOBqX5fERugKw&rs=1&pid=ImgDetMain")


            } else if (idade < 50){
                // Se a idade não se encaixar em nenhuma das faixas anteriores, é considerado idoso
                // Nenhuma ação específica é tomada para esta faixa etária
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.G7Pr1dCaGqqStOUu672WZgHaJ0?w=814&h=1080&rs=1&pid=ImgDetMain")
                
            }
        } else if (sexo[1].checked) {
            // Se o segundo elemento de sexo (Feminino) estiver marcado, define o gênero como "Mulher"
            genero = "Mulher";
        }
        
        
        // Exibe o resultado com o gênero e a idade calculada
        result.innerHTML = `Detectamos ${genero} com ${idade} anos`;

        // Adiciona a imagem ao elemento result
        result.appendChild(img);

        // Adiciona margem superior à imagem para criar espaço entre o texto e a imagem
        img.style.marginTop = "50px";
    }
}


















window.addEventListener("resize", function() {
    if (window.innerWidth > 900) {
        this.window.resizeTo(900, window.innerHeight);
    }

});