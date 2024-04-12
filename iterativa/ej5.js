const leer = require("prompt-sync")();
//similar al punto 3 agregando la posibilidad de sumar o restar según lo decida el usuario
let resultado = 0
let nroIngresado = 0

for (let index = 0; index < 3; index++) {
console.log("Escriba |a| para sumar y |b| para restar");
let sumaOresta = leer();

if (sumaOresta =="a") { 
    console.log("Escriba un nro ");
        nroIngresado = Number(leer());
        resultado = nroIngresado + resultado
        console.log("El resultado es:", resultado);
    }
    else if (sumaOresta == "b") {
        console.log("Escriba un nro ");
        nroIngresado = Number(leer());
        resultado =  nroIngresado- resultado 
        console.log("El resultado es:", resultado);
    }
    else {
        console.log("Error");
    }
} 
