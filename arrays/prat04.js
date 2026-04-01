let num = [1, 7, 4 , 9, 2]
let invertida = []
/* invertendo a array */
for(let c = num.length - 1; c >= 0; c--) {
    invertida.push(num[c])
}

console.log(`Array antiga: ${num}.`)
console.log(`Array invertida: ${invertida}.`)