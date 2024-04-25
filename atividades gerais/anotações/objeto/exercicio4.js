const pessoa = {
    nome: "Eduarda",
    idade: 18,
    genermus: "Certanejo universitário"
}

console.log(`O nome da pessoa é ${pessoa.nome},ela tem ,${pessoa.idade} anos e gosta de ${pessoa.genermus}`)

function novobjet(objeto) {
    const pessoamaisdet = {
        ...objeto,
        comidasfavs: ["lasanha", "Bolo", "Pizza doce"],
        melhoramigo: {
            amignom: "Guto",
            amigidad: 17,
        }
    }
    console.log(`O nome desta pessoa é ${pessoa.nome} e suas comidas favoritas são ${pessoamaisdet.comidasfavs[0]},${pessoamaisdet.comidasfavs[1]} e ${pessoamaisdet.comidasfavs[2]}. Seu melhor amigo se chama ${pessoamaisdet.melhoramigo.amignom} e tem ${pessoamaisdet.melhoramigo.amigidad}`)
}
novobjet(pessoa)