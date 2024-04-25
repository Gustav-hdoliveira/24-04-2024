const professor = {
    name: 'Vitor',
    idade: 27,
    tarefas: ['dar aula', 'responder duvidas'],
    contarpiada: function() {
        console.log('é pa vê ou pa comê?')
    }
}
//console.log(professor.idade)
professor.nome = 'Luquinhas'//usado para alterar o valor

const filmão = {
    Nome: "Godzilla e Kong novo império",
    Anolanca: 2024,
    Elenco: ["Mothra", "Godzilla", "Kong", "Scar"],
    Assisti: true
}
//console.log(filmão.Nome, '\n',filmão.Anolanca,'\n',filme['Elenco'],'\n',filme['assisti'])

const pessoa = {
    nome: "Eduarda",
    idade: 18,
    genermus: "Certanejo universitário"
}
console.log(`O nome da pessoa é ${pessoa.nome},ela tem ,${pessoa.dade} anos e gosta de ${pessoa.genermus}`)

//assim é feito para acessar um objeto dentro de um objeto
const donodopet ={
    nome: "Vitor Hugo",
    pet: {
        nomedopet: "Wanda",
        raca: "vira-lata",
        idade: 1
    }
}
console.log(donodopet.pet.nomedopet)


const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}
//para adicionar propriedade aos objetos, podemos usar notação de pontos
curso.numerodeestudantes = 39


const professores = [
    {nome: "andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]
console.log(professores[1].nome)

const filmin = {
    Nome: "Godzilla e Kong novo império",
    Anolanca: 2024,
    personagens: ["Mothra", "Godzilla", "Kong", "Scar"],
    Assisti: true
}
filmin.atoresdofilme = ["Mariposafoda da silva", "Juresmindo Lagartão", "Leo Estronda preto", "Angolano médio"]
filmin.atoresdofilme[0] = "xuxa"
console.log(filmin)


const usuario = {
    nome: 'prof',
    idade: 25,
    email: 'meupaunasuamao@senacrs.com.br',
    cidade: 'São Paulo'
}
// com este método é possivel fazer a substituição
const novousuario = {
    ...usuario,
    nome: 'João',
    idade: 28
}
console.log(novousuario)

//Sobrescrevemos valores atráves do seu index
const listadenomes = ["Mika", "Paula", "Vitorr"]
const copialistadenomes = [...listadenomes]
copialistadenomes[0] = "Vitor"
console.log(copialistadenomes)