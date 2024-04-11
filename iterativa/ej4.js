//repetir el punto 2 y 3 para 5 iteraciones
const leer = require("prompt-sync")();

for (let index = 0; index <5; index++) {
    console.log("Hello world", index+1);
}
let resultado = 0
let nroIngresado = 0
for (let index = 0; index <5; index++) {
    console.log("Escriba un nro para sumar");
    nroIngresado = Number(leer());
    resultado = nroIngresado + resultado
    console.log("El resultado es:", resultado);
}