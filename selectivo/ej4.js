const leer = require("prompt-sync")();
//pueda sumar o restar dos números dependiendo del usuario
console.log("Ingrese un nro");
let primNro= Number(leer());
console.log("Ingrese otro nro");
let segNro= Number(leer());
console.log("Si quiere multiplicar esos numeros escriba`a`. Para dividir escriba`b`");
let palabraIngresada= leer();
if (palabraIngresada=="a") {
    console.log("El resultado de la suma es: ",primNro*segNro);
}else if (palabraIngresada=="b") {
    console.log("El resultado de la resta es: ",primNro/segNro);
}else{
    console.log("Error. Escriba `a`para multiplicar y `b` para dividir.En minuscula");
}