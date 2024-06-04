//Votre code ici

function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Veuillez entrer deux nombres";
  } else {
    return num1 + num2;
  }
}

export default add;
