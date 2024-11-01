function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    if (numero == Number.NaN) {
      resultado.innerText = "Digite um número";
    }
    const lista = document.createElement("ul");
    resultado.appendChild(lista);
    for (let i = 1; i <= numero; i += 2) {
      const item = document.createElement("li");
      item.innerText = i;
      resultado.appendChild(item)
    }
  }