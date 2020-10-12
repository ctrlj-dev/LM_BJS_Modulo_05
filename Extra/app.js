/*
1º Dado el siguiente array mostrar sus datos de 0 al valor final del array con los bucles dados en clase (while,
do while, for...)
*/

var array = [25, 2.05, 1000, 63, 4.01, -9];

console.log('Bucle for: ');
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log('------------');

console.log('Bucle for of: ');
for (element of array) {
    console.log(element);
}
console.log('------------');
console.log('Bucle for in: ');
for (i in array) {
    console.log(array[i]);
}
console.log('------------');
console.log('Bucle while: ');
var i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++
}
console.log('------------');
console.log('Bucle do while: ');
var i = 0;
do {
    console.log(array[i]);
    i++;
} while (i < array.length);
console.log('------------');

/*
2º Dado el siguiente array de números, mostrar aquellos que sean mayores a 0
*/

var array = [14, 2, 2.02, 63, 0, -9];
console.log('Números del array mayores que 0');
for (element of array) {
    if (element > 0) {
        console.log(element);
    }
}
console.log('------------');
/*
3º Dado el array del ejercicio anterior separa ahora en un array los números mayores o iguales a 0, y en otro
los que sean menores que 0, y mostrar los arrays con los resultados.
*/

var array = [14, 2, 2.02, 63, 0, -9];
