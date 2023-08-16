function palavrasEmOrdemReversa(str) {
    const palavras = str.split(" ");
    const palavrasReversas = palavras.reverse();
    const resultado = palavrasReversas.join(" ");
    return resultado;
  }
  
  console.log(palavrasEmOrdemReversa(" Eu sou bonito!")); // Ira ficar "!bonito sou Eu"
  console.log(palavrasEmOrdemReversa("Palmeiras >>> corinthinas")); // Ira ficar "corinthians <<< Palmeiras"
