function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "ímpar";
    }
  }
  
  console.log(verificarParOuImpar(4)); // Isso imprimirá "par"
  console.log(verificarParOuImpar(7)); // Isso imprimirá "ímpar"