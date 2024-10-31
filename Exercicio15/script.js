function calcularRaiz() {
    console.log('fui chamado');
    const input = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const numero = input.value;
    resultado.innerText = `Resultado: ${Math.sqrt(numero)}`;
}