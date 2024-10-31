const limite = 10;

function calcular() {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);
  const numero3 = Number(document.getElementById("numero3").value);
  const resultado = document.getElementById("resultado");
  const maior = Math.max(Math.max(numero1, numero2), numero3);
  resultado.innerText = `Maior: ${maior}`;
}
