//votre code ici

function printNumbers(n) {
  let resultat = "";
  for (let i = 1; i <= n; i++) {
    resultat += i + " ";
  }
  return resultat.trim();
}
export default printNumbers;
