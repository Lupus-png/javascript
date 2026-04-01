let num = [1, 7, 4 , 9, 2]
let dobro = []
let maior = num[0]
/* dobrando o valor da array */
for(let c = 0; c < num.length; c++) {
    dobro.push(num[c] + num[c])
    if (num[c] > maior) {  /* Localizando o maior valor da array */
        maior = num[c]
    }
}

console.log(`O dobro de ${num.join(', ')} fica exatamente ${dobro.join(', ')}.`)
console.log(`O maior numero da array é ${maior}`)
