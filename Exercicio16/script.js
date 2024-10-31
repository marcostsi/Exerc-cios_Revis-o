const limite = 10;
function construirTabuada() {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");
  for (let i = 1; i <= limite; i++) {
    const itemList = document.createElement("li");
    itemList.textContent = `${numero} x ${i} = ${ numero * i }`;
    resultado.appendChild(itemList);
  }
}
