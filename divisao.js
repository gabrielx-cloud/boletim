//Importar os módulos - readline-sync
let readline = require('readline-sync')

var numero1 = readline.questionInt("Digite o primeiro numero\n")
var numero2 = readline.questionInt("Digite outro numero\n")
var divisao = numero1 / numero2


console.log("A divisao e igual a: " + divisao)