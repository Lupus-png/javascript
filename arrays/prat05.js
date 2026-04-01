let num = [1, 2, 2, 3]
let contador = {}

for (let c = 0; c < num.length; c++) {
    let valor = num[c]

    if (contador[valor] === undefined) {
        contador[valor] = 1
    } else {
        contador[valor] += 1
    }
}

console.log(contador)