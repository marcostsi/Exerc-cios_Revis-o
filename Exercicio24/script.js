function calcular() {
    const numeros = document.getElementById("numero").value.split(',');
    const resultado = document.getElementById("resultado");
    resultado.innerText = `Média: ${calcularMedia(numeros)}`;
  }
  
function calcularMedia(numeros) {
    let soma = 0;
    let totalNumeros = 0;
    numeros.forEach(elemento => {
      const numero = Number(elemento);
      soma += numero == Number.NaN ? 0 : numero;
      totalNumeros += numero == Number.NaN ? 0 : 1;
    });
    
    return soma / totalNumeros;
}