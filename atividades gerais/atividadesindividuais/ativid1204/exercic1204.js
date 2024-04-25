for (let i = 0; i < 10; i++) {
    //console.log(i+1)
}
for (let n = 2; n < 12; n++) {
    //console.log(n++)
}
for (let c = 1; c < 11; c++) {
    //console.log(5*c)
}
let soma = 0
for (let d = 0; d < 10; d++) {
    soma += d
    //console.log(soma)
}
const readlineSync = require('readline-sync');

/*let numersmed = [12, 95, 73, 82, 84]
for (let medianos = 0; medianos < array.length; medianos++) {
    let numero = number(readlineSync.question('Digite 5 numeros: '))
}*/

for (let x = 2; x < 22; x++) {
    if (x % 2 === 0 && x % 3 !== 0) {
        console.log(x)
    }
}

for (let m = 0; m < 101; m++) {
    switch (m) {
        case m % 3 === 0 && m % 5 === 0:
            console.log('FizzBuzz')
            break;
        case m % 5 === 0:
            console.log('Buzz')
            break
        case m % 3 === 0:
            console.log('Fizz')
            break
        default:
            console.log(m)
            break;
    }
}