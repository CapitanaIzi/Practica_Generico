const leer = require("prompt-sync")();
//Crear un juego para adivinar el número secreto generado aleatoriamente en un rango del cero al doble de la cantidad de intentos que desea tener el usuario
// considerar que la cantidad mínima de intentos es 3 por ende el rango mínimo del número secreto es de 0 a 6
let numeroSecreto = "7"
let numIngresado
let cantIntentos
console.log("Bienvenido al juego, intenta adivinar el NUMERO que ha generado el programa, pero antes escribe cuantos intentos quieres tener, tiene que ser mas de 3 intentos");
cantIntentos = leer();
for (let i = 0; i < cantIntentos; i++) {
    console.log("Adivina el nro secreto!");
    numIngresado = Number(leer());
    if (numIngresado == numeroSecreto) {
        console.log("Ganaste!!!");
        i = cantIntentos + 1
    } else {

        console.log("Sigue intentando, te queda", cantIntentos - 1 - i, "intentos");
    }
}

if (numIngresado != numeroSecreto) {
    console.log("Game over :c");
} 

// != eso es distinto