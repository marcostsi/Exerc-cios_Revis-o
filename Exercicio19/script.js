function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    console.log(ehPrimo(numero));
    resultado.innerText = `${ehPrimo(numero) ? "" : "não "}é primo`;
  }
  
function ehPrimo(numero) {
    let numDiv = 1;
    for (let div = 2; div < Math.sqrt(numero); div++) {
      numDiv += numero % div == 0 ? 1 : 0;
    }
  
    return numDiv == 1; 
}
  