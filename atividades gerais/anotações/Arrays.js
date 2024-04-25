//ARRAYS; SÃO LISTAS DE ELEMENTOS
const listadecompras = ['batata', 'nescau', 'requeijão']
//sua numeração de elementos é contada como o primeiro sendo o 0
const segundointem = listadecompras[1] //'nescau'

const dograces = ['Pastor Alemão', 'Pastor Belga', 'Boxer', 'Chauchau', 'Bobberman']
const number = readlineSync.question("Escolha um numero de 0 a 4: ");
const choisedog = dograces[number]
console.log('A raça selecionada foi', choisedog,)

// PROPRIEDADE LENGHT
// diz a quantidade de itens em um array

// METODO INCLUDES(ELEMENTO)
// o metodo includes(elemento) determina se um array contem contem um determinado elemento com true ou false

const serieboas = ["Breaking Bad", "Adventure time", "hajime no ipo"]

serieboas.includes("Breaking Bad") //True

//METODO PUSH(ELEMENTO)
//O metodo push adiciona um ou mais elementos ao final de um array

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros) //1, 2, 3, 4

//METODO POP() remove o ultimo elemento de um array
const meuspeixes = ['palhaço', 'mandarim', 'esturjão']

meuspeixes.pop()
console.log(meuspeixes) //['palhaço', 'mandarim']

//METODO SPLICE(I, N)
//O METODO SPLICE(I, N) romove n elementos à partir da posição i do array

const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
//indices (i)    0    1    2    3    4    5    6    7
letras.splice(2, 1)
//        letras = ['A', 'D', 'E', 'F', 'H']

