const vogais = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };
  
function calcular() {
    const palavra = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
    let numDeVogais = 0;
    for (let i = 0; i < palavra.length; i++) {
      numDeVogais += vogais[palavra[i].toLowerCase()] ? 1 : 0;
    }
    
    resultado.innerText = `Número de vogais: ${numDeVogais}`;
}