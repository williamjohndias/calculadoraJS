operacao = prompt("operacao: ")


var variavel1 = prompt("primeiro número: ")
var variavel2 = prompt("segundo número: ")

variavel1 = parseInt(variavel1)

variavel2 = parseInt(variavel2)

if (operacao == '+' || operacao != '+') {
    soma = variavel1 + variavel2
    document.write("<h1>O valor da soma dos números será: </h1>" + soma)
}

else {
    document.write('repita')
}



