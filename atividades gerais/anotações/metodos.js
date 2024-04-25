//PROPRIEDADE LENGTH
const nome = 'Leonardo de Souza'
console.log(nome.length) //conta quantos caracteres tem, incluindo os espaços

//PROPRIEDADE trim retira os espaços de antes de depois da string
//util em formularios como login
const email = "  mika@gmail.com"

console.log(email.trim()) //= mika@gmail.com

//MÉTODO INCLUDES
//o metodo includes deter mina se um  grupo de caracteres está incluido dentro de outra string, retona true ou false
const frase = 'hoje comi cenoura'
frase.includes('cenoura') //true
frase.includes('batata') //false

//MÉTODO REPLACEALL
//o método replaceall(chars1, chars2) troca as ocorrencias de um conjunto de caracteres

const readlineSync = require('readline-sync');
const oração = readlineSync.question("Escreva uma frase.");
console.log(oração.toUpperCase())
console.log(oração.replaceALL('o', 'i'))
console.log(oração.length)