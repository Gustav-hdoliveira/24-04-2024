//Importando o módulo readline
const readline = require("readline");

//criando uma instancia de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitado ao usuario que insira sua idade
rl.question("qual a sua idade? ", (idade) => {
    //exibindo idade inserida pelo  usuario
    console.log("sua idade é", idade);

    //fechando interface de leitura
    rl.close();
});
