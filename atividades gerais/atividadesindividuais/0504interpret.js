/*
a.
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

const readlineSync = require('readline-sync');

const frase = readlineSync.question("Subi num onibus em Marrocos");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
/*
SUBI NUM ONIBUS EM MIRROCOS
5
*/
