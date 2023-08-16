function converterParaMaiusculas(arrayDePalavras) {
    const arrayEmMaiusculas = arrayDePalavras.map(palavra => palavra.toUpperCase());
    return arrayEmMaiusculas;
  }
  const palavras = ["maçã", "banana", "laranja"];
  const palavrasEmMaiusculas = converterParaMaiusculas(palavras);
  console.log(palavrasEmMaiusculas); // ira ficar "MAÇÃ", "BANANA", "LARANJA"
