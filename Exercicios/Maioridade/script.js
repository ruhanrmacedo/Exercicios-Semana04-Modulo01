function maioridade(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let mensagem;;  
    if (idade >= 18) {
        mensagem = nome + " tem " + idade + "anos e é maior de idade";
    } else {
        mensagem = nome + " tem " + idade + " anos e é menor de idade";
    }

    document.getElementById("resultado").innerHTML = mensagem;
    
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", maioridade);
});