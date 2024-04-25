const readlineSync = require('readline-sync');
const email = readlineSync.question("qual seu email? ");
const user = readlineSync.question("Escreva seu nome de usuario: ");
console.log('O email ' + email, 'foi cadastrado com sucesso, bem vindo ' + user)

const minhascomifav = ['bolo de chocolate', 'morango com creme de leite', 'pizza', 'bife de figado empanado', 'achocolatado']
console.log(minhascomifav)
console.log(`those are my favorite foods: \n${minhascomifav.join('\n')}`)
