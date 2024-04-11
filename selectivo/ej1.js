const leer = require("prompt-sync")();

//reciba un numero y nos indique si es positivo o negativo

console.log("Ingresa un numero");
let numIngresado = leer();

if ( numIngresado > 0) {
    console.log("Es positivo");
}else if(numIngresado == 0){
    console.log("Es un numero magico");
}else{
    console.log("Es negativo");
}