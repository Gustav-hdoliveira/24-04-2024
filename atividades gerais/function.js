function calculaarea(altura, largura) {
 const area = altura * largura
 console.log(area)   
}
calculaarea(2, 3)

function fala() {
    console.log('Olá mundo')
}
fala()

function olnom(nome) {
    console.log(`olá ${nome}`)
}
olnom('Danilo')
olnom('Lorenzo')
olnom('você tbm, Icaro')

function notatotal(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3
    const notafinal = soma / 3
    console.log(notafinal)
}
notatotal(6, 8, 5)

function numeroparouimp(nuum) {
    if (nuum % 2 === 0){
        console.log(`O número ${nuum} é par`)
    } else {
        console.log(`O número ${nuum} é ímpar`)
    }
}
numeroparouimp(942)