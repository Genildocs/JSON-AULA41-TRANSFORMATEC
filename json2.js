// Json aninhados

var frutas = '["maça", "uva", "morango"]'

var frutasObj = JSON.parse(frutas)

//Pegando um valor do array pelo indice

console.log(frutasObj[0])

// Array de objetos
var populacao = [
    // Pegando o objeto pelo indice. populacao[0]
    {"nome" : "João", "idade": 30, "cor": "Negra"},
    // populacao[1]
    {"nome" : "Marcos", "idade": 25, "cor": "Parda"}
]

console.log(populacao)

// Obtendo uma pessoa da populacao
console.log("Pessoa: ", populacao[0])

//obetendo uma propriedade de uma pessoa da populacao
console.log("nome da pessoa: ", populacao[1].nome)

