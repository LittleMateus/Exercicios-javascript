function palavrasEmOrdemReversa(str) {
    const palavras = str.split(" ");
    const palavrasReversas = palavras.reverse();
    const resultado = palavrasReversas.join(" ");
    return resultado;
  }
  
  console.log(palavrasEmOrdemReversa("Olá, mundo!")); // Isso imprimirá "mundo! Olá,"
  console.log(palavrasEmOrdemReversa("Programação é incrível")); // Isso imprimirá "incrível é Programação"