const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

/*será imprimido:
"Matheus Nachtergaele"
"Virginia Cavendish"
"canal: Canal Brasil, Horario: "19h"
*/

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
/*será imprimido
Cachorro:
{
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
gato:
{
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}
tartaruga:
{
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}
b) a sintase faz com que o objeto seja usado como base para uma alteração
*/

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
/*
Esta definido para caso, o valor impresso na propriedade for backender o resultado seja falso
*/