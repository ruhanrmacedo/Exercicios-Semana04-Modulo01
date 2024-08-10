// Função que verifica se um número é par ou ímpar
function isEven() {
    // Obtém o número digitado pelo usuário e converte para inteiro através da função parseInt
    let number = parseInt(document.getElementById("number").value);
    // Declara a variável message
    let message;

    // Verifica se o valor digitado é um número
    if (isNaN(number)) {
        message = "Por favor, insira um número válido";
    } else if (number % 2 === 0) { // Verifica se o número é par
        message = number + " é par";
    } else { // Caso contrário, o número é ímpar
        message = number + " é ímpar";
    }

    // Atualiza o conteúdo do elemento com o id "resultado" com a mensagem
    document.getElementById("resultado").textContent = message;
}


