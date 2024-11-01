function calcular() {
    const ano = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    resultado.innerText = `${ehBissexto(ano) ? "" : "não "}é bissexto`;
  }
  
  function ehBissexto(ano) {
    if (ano % 4 != 0) 
      return false;
    
    if (ano % 100 != 0) 
      return true;
    
    return ano % 400 == 0;
  }