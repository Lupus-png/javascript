let numeros = [3, 7, 2, 9, 5]
let maior = numeros[0]
let menor = numeros[0]
let segundo = numeros[0]

for(let c = 1; c < numeros.length; c++) {
    if(numeros[c] > maior) {
        segundo = maior
        maior = numeros[c]
    } else if (numeros[c] > segundo && numeros[c] !== maior) {
        segundo = numeros[c]
    }
    if(numeros[c] < menor) {
        menor = numeros[c]
    }
}

console.log(`O maior numero: ${maior}`)
console.log(`O menor numero: ${menor}`)
console.log(`O segundo maior numero: ${segundo}`)