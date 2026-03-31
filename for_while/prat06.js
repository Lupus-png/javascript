let numero = [1, 2, 3, 4, 5, 6]
let par = 0
let impar = 0
let pares = 0
let impares = 0 

for(let c = 0;c < numero.length; c++) {
    if(numero[c] % 2 == 0) {
        par += numero[c]
        pares++
    } else {
        impar += numero[c]
        impares++
    }
}
console.log(`A soma dos numeros pares é ${par}`)
console.log(`A soma dos numeros impares é ${impar}`)
console.log(`Tem o total de ${pares} pares e ${impares} impares`)