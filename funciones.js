function suma (n1,n2){
    return n1+n2;
}
let numero1 = parseInt(prompt("Ingresa el numero 1 :"));
let numero2 = parseInt(prompt("Ingresa el numero 2 :"));
let resultado = suma(numero1,numero2)
console.log(typeof resultado)
alert("El resultado es :" + resultado)