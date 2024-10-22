let comida = 2800 + 1300;
let bebida = 900 + 650;

// Para poner la coma al numero
const comida1 = comida.toLocaleString('en-US', { minimumFractionDigits: 2 });
const bebida1 = bebida.toLocaleString('en-US', { minimumFractionDigits: 2 });

let cuentaTotal = comida + bebida;
// Para poner la coma al numero
const total = cuentaTotal.toLocaleString('en-US', { minimumFractionDigits: 2 });

console.log("EL total de la comida es: " + "$" + comida1);
console.log("El total de bebida es: " + "$" + bebida1);
console.log("--------------------------------");
console.log("El total de la cuenta es: " + "$" + total);
