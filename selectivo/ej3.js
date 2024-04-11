const leer = require("prompt-sync")();
//pueda sumar o restar dos números dependiendo del usuario
console.log("Ingrese un nro");
let primNro= Number(leer());
console.log("Ingrese otro nro");
let segNro= Number(leer());
console.log("Si quiere sumar esos numeros escriba`a`. Para restar escriba`b`");
let palabraIngresada= leer();
if (palabraIngresada=="a") {
    console.log("El resultado de la suma es: ",primNro+segNro);
}else if (palabraIngresada=="b") {
    console.log("El resultado de la resta es: ",primNro-segNro);
}else{
    console.log("Error. Escriba `a`para sumar y `b` para restar.En minuscula");
}