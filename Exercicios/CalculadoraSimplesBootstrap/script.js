console.log("Script funcionando!");

// Função para somar dois números
function somar() {
    var valor1 = parseFloat(document.getElementById("inputNumero1").value);
    var valor2 = parseFloat(document.getElementById("inputNumero2").value);

    var resultado = valor1 + valor2;
    return resultado;
}

// Função para exibir o resultado da soma
function gerarResultado() {
    event.preventDefault();
    var resultado = somar();
    document.getElementById("txt-resultado").innerHTML = "O resultado é: " + resultado;
    alert("O resultado é: " + resultado);
}