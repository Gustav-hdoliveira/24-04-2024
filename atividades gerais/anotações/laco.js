/*WHILE
let voltas = 1
while (voltas<10) {
    console.log("pedala")
    voltas++ //adiciona mais um
}
o codigo começa a se repitir e só roda quando for concluida

let i = 0
while (i<10) {
    console.log(i+1)
    i++
}
*/
let o = 10
let par = o % 2 === 0
while (o>=0) {
    if (o === 0) {
        console.log('BOOM')
    } else if (o % 2 === 0) {
        console.log('TIC')
    } else {
        console.log('TAC')
    }
    o--
}

/*
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
*/
let numeros = [14, 84, 9830, 38, 2]

for (let b = 0; b < numeros.length; b++) {
    const element = numeros[b];
    console.log(element)
}
// for... of ... é feito especificamente para percorrer arrays
const conjunto = [584, 294, 3949, 2494, 23, 483]
for (const unidade of conjunto) {// a unidade representa os numeros individuais do array
    console.log(conjunto)
}