function calcular() {
    const frase = document.getElementById("frase").value;
    const resultado = document.getElementById("resultado");
    const totalPalavras = frase.split(" ").length;
    resultado.innerText = `Número de palavras: ${totalPalavras}`;
}
  