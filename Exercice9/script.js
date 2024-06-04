// votre code ici
/* const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); */

function checkAge(age) {
  if (typeof age !== "number" || age < 0) {
    return "Erreur, veuillez rentrer un nombre positif";
  } else if (age < 18) {
    return "Vous êtes mineur";
  } else if (age >= 18 && age <= 65) {
    return "Vous êtes majeur";
  } else {
    return "Vous êtes senior";
  }
}
/* rl.question("Quel est votre âge ? : ", (answer) => {
  const age = parseInt(answer);
  console.log(checkAge(age));
  rl.close();
}); */

export default checkAge;
