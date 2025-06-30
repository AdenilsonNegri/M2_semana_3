     function validarData() {
      const dia = parseInt(document.getElementById("dia").value);
      const mes = parseInt(document.getElementById("mes").value);
      const ano = parseInt(document.getElementById("ano").value);

      let dataValida = true;

      if (ano <= 0 || ano > 9999) {
        dataValida = false;
      } else if (mes < 1 || mes > 12) {
        dataValida = false;
      } else {
        let maxDias;
        if (mes === 2) {
          maxDias = 28;
        } else if ([4, 6, 9, 11].includes(mes)) {
          maxDias = 30;
        } else {
          maxDias = 31;
        }

        if (dia < 1 || dia > maxDias) {
          dataValida = false;
        }
      }

      const mensagem = dataValida ? "✅ Data válida" : "❌ Data inválida";
      console.log(mensagem);
      document.getElementById("resultado").textContent = mensagem;
    }


