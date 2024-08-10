// Função que classifica a nota de um aluno
function gradeClassification() {
    // Obtém o nome informado pelo usuário através do id "nome"
    let nome = document.getElementById("nome").value;
    // Obtém a nota informada pelo usuário através do id "nota" e converte para float através da função parseFloat
    let nota = parseFloat(document.getElementById("nota").value);
    // Declara a variável mensagem
    let mensagem;


    // Verifica a nota do aluno e atribui a mensagem correspondente através de um switch
    switch (true) {
        // Caso a nota seja maior ou igual a 90 e menor ou igual a 100
        case nota >= 90 && nota <= 100:
            mensagem = nome + " obteve nota A";
            break;
        // Caso a nota seja maior ou igual a 80 e menor que 90
        case nota >= 80 && nota < 90:
            mensagem = nome + " obteve nota B";
            break;
        // Caso a nota seja maior ou igual a 70 e menor que 80  
        case nota >= 70 && nota < 80:
            mensagem = nome + " obteve nota C";
            break;
        // Caso a nota seja maior ou igual a 60 e menor que 70  
        case nota >= 60 && nota < 70:
            mensagem = nome + " obteve nota D";
            break;
        // Caso a nota seja maior ou igual a 60 e menor que
        case nota < 60 && nota >= 0:
            mensagem = nome + " obteve nota F";
            break;
        // Caso a nota não seja um número válido
        default:
            mensagem = nome + " por favor, insira um número válido";
            break;
    }

    // Atualiza o conteúdo do elemento com o id "resultado" com a mensagem
    document.getElementById("resultado").innerHTML = mensagem;
}