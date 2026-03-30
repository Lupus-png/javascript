let numeros = [3, 7, 2, 9, 5]
let maior = numeros[0]

for (c = 0; c < numeros.length; c++) {
    if (numeros[c] > maior) {
        maior += numeros
    }
}
console.log(`O maior numero é ${maior}`)