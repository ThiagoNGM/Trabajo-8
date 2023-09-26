//ejercicio N1
console.log("ejercicio N1 Los numeros pares entre el 1 y el 20 son:")
for (i = 0; i<= 20; i += 2) { 
    console.log(i) 
}

//ejercicio N2
console.log("ejercicio N2 La suma de todos los numeros del 1 al 50 son: ")

for(numero=1;numero<=50;numero++){
    console.log(numero)
}
//ejercicio N3
console.log("ejercicio N3 Listado de nombres:")
nombres = ["Fiamma","Yael","lautaro","Santiago","Alexis","Agustin","Mario","Estefano"]
for(x=0;x<nombres.length;x++){
    console.log(nombres[x])
}
//ejercicio N4
numero = 8
console.log("ejercicio N4 tabla del 8")
for(x=1;x<=10;x++){
    multiplicacion = numero*x
    console.log(numero + " X " + x + " es: " + multiplicacion)
}
//ejercicio N5
var cadena = prompt("ejercicio N5 Ingresa una cadena: ");
var letra_buscar = prompt("Ingresa la letra que deseas contar: ");
var contador = 0;

for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra_buscar) {
        contador++;
    }
}
console.log(`La letra '${letra_buscar}' aparece ${contador} veces en la cadena.`);
//ejercicio N6
console.log("ejercicio N6 traduccion del codigo while")
const numeros = [2, 3, 5, 7, 10];
sumaCuadrados = 0;

for(i=0;i<numeros.length;i++){
     sumaCuadrados += numeros[i] * numeros[i];
}
console.log("La suma de los cuadrados es:", sumaCuadrados);
