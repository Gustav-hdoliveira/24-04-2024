console.log('Olá! Poderia nos informar a sua idade para que possamos determinar se você pode dirigir?')
idade = 17
idademinima = 18
carteiramotorista = false
if (idade >= idademinima && carteiramotorista === true ) {
    console.log('Você possui a idade minima e a carteira para poder dirigir, parabens!')
} else {
    console.log('Você não possui os requisitos para poder dirigir')
}
let horarioaula = 'V'
switch (horarioaula) {
    case 'V':
        console.log("Boa tarde!")
        break;
        case 'M':
            console.log('Bom dia!')
            break;
            case 'N':
                console.log("Boa noite!")

    default:
        console.log('Mora em outra dimensão ou não estuda (vagabundo kkkkk)')
        break;
}
let lanche = 'chocolate'
let ingresso = 14
genero = "fantasia"
if (ingresso <= 15 && genero === "fantasia") {
    console.log('Bom filme, aproveita o seu', lanche,)
} else {
    console.log('Acha outro filme.')
}
