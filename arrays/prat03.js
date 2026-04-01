let num = [1, 2, 2, 3, 4, 4, 5]
let nova = []
/* removendo valores repetidos da array */
for(let c = 0; c < num.length; c++) {
    if (!nova.includes(num[c])) {
        nova.push(num[c])
    }
}
console.log(`Array antiga: ${num}.`)
console.log(`Array sem repetições: ${nova}.`)