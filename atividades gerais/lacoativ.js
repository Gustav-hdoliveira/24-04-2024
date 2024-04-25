/* const readlineSync = require('readline-sync');
let numero
let soma = 0
while (numero !== 0) {
    numero = number(readlineSync.question("Digite o numero: "));
    soma += numero
}
console.log(soma)
*/
const arai = [95, 20, 92, 500, 129]
let biger = 0
function bignumber(arai) {
    for (let i = 0; i < arai.length; i++) {
        if (arai[i] > biger) {
            biger = arai[i]
        } 
        
    }
    return biger
}

//console.log(bignumber(arai))

const frases = ["Ryan ", "Gosling ", "é o ", "Ken "]
let mensagem = ""

function Imprimirmensagem(palavras) {
    for (let palavra of palavras) {
    mensagem += palavras + " "
    }
    return mensagem
}
console.log(Imprimirmensagem(frases))