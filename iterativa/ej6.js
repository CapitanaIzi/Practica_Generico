const leer = require("prompt-sync")();
//un juego donde hay 10 intentos para intentar adivinar el número secreto del programa, si el usuario adivina entonces el programa termina caso contrario al quedarse sin intentos el programa avisa la derrota del usuario
let numeroSecreto = "7"
for (let index = 0; index < 10; index++) {
    console.log("Adivina el nro secreto,son 10 intentos");
    let numIngresado = Number(leer());
    if (numIngresado == numeroSecreto) {
        console.log("Ganaste!");
        index = 11
    } else {
        console.log("Perdiste!");
    }
}