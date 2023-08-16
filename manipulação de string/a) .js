function ehPalindromo(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    const reversedStr = str.split("").reverse().join("");
  
    return str === reversedStr;
  }
  
  console.log(ehPalindromo("radar"));   // Isso imprimirá "true"
  console.log(ehPalindromo("banana"));  // Isso imprimirá "false"
  console.log(ehPalindromo("A man, a plan, a canal, Panama"));  // Isso imprimirá "true"