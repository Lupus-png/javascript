let palavra = 'Javascript'
let inverter = ''

for(let c = palavra.length - 1; c >= 0; c--) {
    inverter += palavra[c]
}
console.log(`A palavra "${palavra}" invertida fica "${inverter}"`)