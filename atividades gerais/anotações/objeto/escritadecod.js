const pessoa = {
    nome: "Lucas Nunes", 
    apelidos: ["Luquinhas", "Esmilinguido", "Kogos"]
 }
function fraseapelidos(objeto) {
    console.log(`Oi meu nome é ${objeto.nome}, mas eu sou apelidado de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} e ${objeto.apelidos[2]}`)
}
fraseapelidos(pessoa)

const pessoanova = {
    ...pessoa,
    apelidos: ["Zeca Urubu", "Perna Longa", "Leoncio na Puberdade"]
}
fraseapelidos(pessoanova)


//2)
const trabalhador = {
    nome: ("Rodrigo Silveira da Silva"),
    idade: (43),
    trabalho: ("Gerente de pessoal")
}
function trabalhadordados(objeto) {
    let nomevalor = objeto.nome.length
    let trabalhovalor = objeto.trabalho.length
    const valores = [objeto.nome, nomevalor, objeto.idade, objeto.trabalho, trabalhovalor]
    console.log(valores)
}
trabalhadordados(trabalhador)

//3)
let carrinho = []
const fruta = {
    nome: "Morango",
    disponibilidade:true
}
const frios = {
    nome: "Geleia",
    disponibilidade: false
}
const doces = {
    nome: "Nescau",
    disponibilidade: true
}
function retorncarrinho(params) {
    params.push(fruta, frios, doces)
    console.log(params)
}
retorncarrinho(carrinho)