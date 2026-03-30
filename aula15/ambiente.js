let num = [5, 8, 2, 9, 3]
num.sort() /* ordem crescente */
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O terceiro valor do vetor é ${num[2]}`)

let pos = num.indexOf(8)  /* encontra o valor na array, com base na posição atual */
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

