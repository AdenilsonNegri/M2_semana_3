function calcularJuros() {
  const capital = parseFloat(document.getElementById("capital").value);
  const periodo = parseInt(document.getElementById("periodo").value);

  if (isNaN(capital) || isNaN(periodo)) {
    console.error("Digite valores válidos.");
    return;
  }

  const taxa = 0.05;
  const montante = capital * Math.pow(1 + taxa, periodo);

  console.log("Resultado:", montante.toFixed(3));
  document.getElementById("resultado").textContent =
    `Resultado: R$ ${montante.toFixed(3)}`;
}
