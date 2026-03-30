let palavra = 'JavaScript'
let c = 0
let vogais = 0
let consoantes = 0
palavra = palavra.toLowerCase()

for(c = 0; c < palavra.length; c++) {
//    console.log(palavra[c])
    if (palavra[c] == 'a' || palavra[c] == 'e' || palavra[c] == 'i' || palavra[c] == 'o' || palavra[c] == 'u') {
        vogais++
    }
}
console.log(`A palavra tem ${vogais} vogais`)
console.log(`E tem ${consoantes} consoantes`)
//console.log(palavra.length)