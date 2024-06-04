import add from "./script.js";

// Tests

console.log("le résultat de votre calcul est", add(2, 2)); // Retourne 4
console.log("le résultat de votre calcul est", add(2, 3)); // Retourne 5
console.log("le résultat de votre calcul est", add(2.5, 3.5)); // Retourne 6
console.log("le résultat de votre calcul est", add(2, 3.5)); // Retourne 5.5
console.log(add("2", 3)); // Retourne "Veuillez entrer deux nombres"
