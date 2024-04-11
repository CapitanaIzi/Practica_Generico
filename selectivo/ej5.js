const leer = require("prompt-sync")();
console.log("Escriba su nombre");
let nombreUsuario= leer();
console.log("Si quiere que lo Salude escriba `h`.Para despedirlo escriba `b`");
let bienveOdesp= leer();
if (bienveOdesp=="h") {
    console.log("Hola",nombreUsuario,"Bienvenido");
} else if(bienveOdesp=="b") {
console.log("Bye", nombreUsuario,"Hasta luego");
} else{
    console.log("Error. Si quiere que lo Salude escriba `h`.Para despedirlo escriba `b`.En minuscula");
}