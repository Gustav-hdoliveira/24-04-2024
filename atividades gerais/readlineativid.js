const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("qual a sua idade? ", (idade) => {
    console.log("sua idade é", idade);
    if (idade >= 18) {
        console.log('Você é de maior!')
    } else {
        console.log('Você é de menor!')
    }
    rl.close();
});