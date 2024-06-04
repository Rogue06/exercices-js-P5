import checkAge from "./script.js";

// Tests
console.log("Si l'age est de 15 ans alors ", checkAge(15)); // "Vous êtes mineur."
console.log("Si l'age est de 18 ans alors", checkAge(18)); // "Vous êtes majeur."
console.log("Si l'age est de 30 ans alors", checkAge(30)); // "Vous êtes majeur."
console.log("Si l'age est de 65 ans alors", checkAge(65)); // "Vous êtes majeur."
console.log("Si l'age est de 66 ans alors", checkAge(66)); // "Vous êtes senior."
console.log("Si l'age et en toute lettre alors", checkAge("dix-huit")); // "L'âge doit être un nombre entier positif."
console.log("Si un chiffre négatif alors", checkAge(-1)); // "L'âge doit être un nombre entier positif."
console.log("Si vous n'entrez rien alors", checkAge(null)); // "L'âge doit être un nombre entier positif."
