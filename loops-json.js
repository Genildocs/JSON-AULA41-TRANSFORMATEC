// Loops em Arrays

//STRING CONTENDO JSON
const dado = '{"nome":"João", "idade": 30, "carro":null}'

//Transformado a string em um objeto.
const pessoa = JSON.parse(dado);
//Imprimindo o nome das propriedades.
for(const prop in pessoa){
    console.log("Propriedade:", prop)
}

//Imprimindo o VALOR das propriedades do objeto.

for (const prop in pessoa){
    console.log("Propriedade valor:", pessoa[prop])
}