function transformar() {
  const input = document.getElementById('frase').value;

  const resultado = input
    .toLowerCase()
    .split(' ')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');

  document.getElementById('resultado').textContent = resultado;
}
