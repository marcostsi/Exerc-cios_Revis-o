function calcular() {
    const palavra = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
    resultado.innerText = `${ehPalindromo(palavra) ? "" : "não "} é palíndromo`;
  }
  
function ehPalindromo(palavra) {
    for (let i = 0; i < palavra.length / 2; i++) {
      const j = palavra.length - i - 1;
      if (palavra[i] != palavra[j]) 
        return false;
    }
    
    return true;
}