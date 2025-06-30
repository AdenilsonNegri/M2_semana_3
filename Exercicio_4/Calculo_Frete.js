function calcularFrete() {
      const regiao = document.getElementById("regiao").value.trim().toLowerCase();
      const peso = parseFloat(document.getElementById("peso").value);

      let frete;

      switch (regiao) {
        case "norte":
          frete = 24 + (2.20 * peso);
          break;
        case "nordeste":
          frete = 22 + (2.10 * peso);
          break;
        case "centro-oeste":
          frete = 20 + (2.00 * peso);
          break;
        case "sudeste":
          frete = 16 + (1.80 * peso);
          break;
        case "sul":
          frete = 18 + (1.90 * peso);
          break;
        default:
          document.getElementById("resultado").textContent = "❌ Região inválida";
          console.log("Região inválida");
          return;
      }

      const mensagem = `📦 Frete para ${regiao.charAt(0).toUpperCase() + regiao.slice(1)}: R$ ${frete.toFixed(2)}`;
      document.getElementById("resultado").textContent = mensagem;
      console.log(mensagem);
    }
