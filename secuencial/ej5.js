const leer = require("prompt-sync")();

console.log("Escriba un nro");
let nr1= Number(leer ());
console.log("Escriba otro nro para sumarlo con el anterior");
let nr2= Number(leer ());
console.log("El resultado de la suma es:", nr1+nr2);