const readlineSync = require('readline-sync');
const arrayvaz = []
const tarefas = readlineSync.question("Liste 3 tarefas que você faz todo dia. Tarefa 1: ");
const tarefa2 = readlineSync.question("Tarefa 2: ")
const tarefa3 = readlineSync.question("Tarefa 3: ")
arrayvaz.push(tarefas, tarefa2, tarefa3)
console.log(arrayvaz)
const tarefanum = readlineSync.question("Qual o numero da tarefa que você realizou hoje? ")
switch (tarefanum) {
    case 1:
        arrayvaz.splice(0, 1)
        break;
        case 2:
        arrayvaz.splice(1, 1)
        break;
        case 3:
            arrayvaz.splice(2, 1)

    default:
        console.log('tarefa incorretamente selecionada')
        break;
}
console.log(arrayvaz)