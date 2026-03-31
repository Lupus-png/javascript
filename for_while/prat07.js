let palavra = 'programacao'
let letra = 'a'
let contador = 0
palavra.toLowerCase

for(let c = 0; c < palavra.length; c++) {
    if(palavra[c] === letra) {
        contador++
    }
}
console.log(`a letra A aparece ${contador} vezes`)
