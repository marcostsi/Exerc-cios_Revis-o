function calcular() {
    const palavra = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
    let numAs = 0;
    for (let i = 0; i < palavra.length; i++) {
      numAs += palavra[i].toLowerCase() == 'a' ? 1 : 0;
    }
    resultado.innerText = `Total de A's: ${numAs}`;
  }