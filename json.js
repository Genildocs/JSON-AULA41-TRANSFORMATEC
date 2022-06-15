// Json formato de dados para trafego na web para comunicação entre front e back-end.

// Declando um objeto na notação JSOn
var pessoa = {
    //proprieda : valor
    "nome": "Genildo",
    "idade": 30,
    "cor": "Parda"
}

// Obtendo dados do JSON

console.log("Dados da pessoa: nome: ", pessoa)

// Obtendo priedade do objeto pessoa.
var idade = pessoa.idade

console.log(idade)

//Atribuir valor no JSON 

pessoa.nome = "João"
console.log(pessoa)