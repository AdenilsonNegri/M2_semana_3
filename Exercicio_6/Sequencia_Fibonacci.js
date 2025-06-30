function gerarFibonacci() {
  const limite = parseInt(document.getElementById('limite').value);
  let a = 0, b = 1;
  let sequencia = [a];

  while (b <= limite) {
    sequencia.push(b);
    let proximo = a + b;
    a = b;
    b = proximo;
  }

  document.getElementById('resultado').textContent = sequencia.join(', ');
  console.log(sequencia.join(', '));
  
}
