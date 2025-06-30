    function gerarMatrizIdentidade() {
      const ordem = parseInt(document.getElementById('ordem').value);
      let matriz = "";

      for (let i = 0; i < ordem; i++) {
        let linha = "";
        for (let j = 0; j < ordem; j++) {
          linha += (i === j) ? "1" : "0";
        }
        matriz += linha + "\n";
      }

      document.getElementById('resultado').textContent = matriz;
      console.log(matriz);
    }


