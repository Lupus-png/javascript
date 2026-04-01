let num = [1, 7, 4 , 9, 2]
let par = []
let itens = 0
soma = 0

/* Somar os valores da array */
for(let c = 0; c < num.length; c++) {   
    soma += num[c]
}
/* Mostrar somente os numeros pares da array */
for(let c = 0; c < num.length; c++) {
    if(num[c] % 2 == 0) {
        par.push(num[c])
    }
}
/* Contar quantos elementos tem na array */
for(let c = 0; c < num.length; c++) {
    itens += 1
}

/* Mostrar os valores da array */
console.log(num.join(', '))
console.log(`A soma dos valores da array é ${soma}`)
console.log(`Os numeros pares são ${par.join(', ')}`)
console.log(`A array tem ${itens} elementos`)