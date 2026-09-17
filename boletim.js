//Importar os módulos - readline-sync
let readline = require('readline-sync')

var numero1 = readline.questionInt("Digite o primeiro numero\n")
var numero2 = readline.questionInt("Digite outro numero\n")
var numero3 = readline.questionInt("Digite outro numero\n")
var numero4 = readline.questionInt("Digite outro numero\n")
var media = (numero1 + numero2 + numero3 + numero4) / 4


console.log("A media e igual a: " + media)
if (media > 7) {
    console.log("Você esta aprovado!!!♥♥")
} else {
    console.log("Você foi reprovado☺")
}
