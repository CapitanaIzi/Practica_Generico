const leer = require("prompt-sync")();

const PALABREA_SECRETA = "trayecto";
const PALABREA_SECRETA_2 = "TRAYECTO";

console.log("Intenta adivinar la palabra secreta");
let palabraIngresada = leer();

if ( palabraIngresada == PALABREA_SECRETA) {
    console.log("Adivinaste! ganaste 100 pesos!");
}else if( palabraIngresada == PALABREA_SECRETA_2){
    console.log("Adivinaste! ganaste 50 pesos!");
}else{
    console.log("Perdiste! :(");
}