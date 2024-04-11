//sume 3 números ingresados por consola donde por cada número ingresado debe mostrar el valor del resultado actual o sea en cada iteración
const leer = require("prompt-sync")();
let resultado = 0
let nroIngresado = 0
for (let index = 0; index <3; index++) {
    console.log("Escriba un nro para sumar");
    nroIngresado = Number(leer());
    resultado = nroIngresado + resultado
    console.log("El resultado es:", resultado);
}