let vitorias = 20
let derrotas = 5
let resultado = calculo(vitorias, derrotas)

function calculo(vitoria, derrota){
    let subtracao = vitoria - derrota
    return subtracao
}

if (resultado < 10){
    subtracao = "ferro"
}else if (resultado >= 11 && resultado <=20){
    subtracao = "Bronze"
}else if (resultado >= 21 && resultado <=50){
    subtracao = "Prata"
}else if (resultado >= 51 && resultado <=80){
    subtracao = "Ouro"
}else if (resultado >= 81 && resultado <=90){
    subtracao = "Diamante"
}else if (resultado >= 91 && resultado <=100){
    subtracao = "Lendário"
}else if (resultado >= 101){
    subtracao = "Imortal"
}

console.log("O herói tem o saldo de " + resultado + " vitórias " + "e está no nível de " + subtracao)
