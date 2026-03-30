let valor = 300
let desconto = 0

if (valor < 100) {
    desconto = 0
} else if (valor <= 200) {
    desconto = 10
} else {
    desconto = 20
}
let valorFinal = valor - (valor * desconto) / 100
console.log(`Você tem ${desconto}% de desconto, o valor final agora é ${valorFinal}`)