console.log("Script funcionando!");

// Função para somar dois números
function somar() {
    var valor1 = parseFloat(document.getElementById("inputNumero1").value);
    var valor2 = parseFloat(document.getElementById("inputNumero2").value);

    var resultado = valor1 + valor2;
    return resultado;
}

function gerarResultado() {
    var resultado = somar();
    document.getElementById("resultado").innerHTML = resultado;
    alert("O resultado é: " + resultado);
}