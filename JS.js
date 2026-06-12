/* for(let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
} */

/* var nome = "JavaScript";
var invertida = "";

for(let i = nome.length - 1; i > -1; i--) {
    console.log(nome[i])
    invertida += nome[i];
}
console.log(invertida) */

/* var palavra = "Abacaxi".toLowerCase()
var vogais = 0;

for(let i=0; i < palavra.length; i++) {
    if (palavra[i] == "a" || palavra[i] == "e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u") {
        vogais++
    }
}
console.log(vogais) */

/* var dado = [3, 8, 1, 15, 4];
var maior = 0

for(let i=0; i < dado.length; i++) {
    if (dado[i] > maior || maior == 0) {
        maior = dado[i]
    }
}
console.log(maior) */

/* let numero = [1, 2, 2, 3, 4, 4, 5];
let n = [];

for(let i=0;i < numero.length;i++) {
    if(!n.includes(numero[i])) {
        n.push(numero[i]);
    }
}
console.log(n) */

/* let num = [10, 5, 8, 20, 15]
let maior = 0;
let segundo = 0;

for(let i=0; i < num.length; i++ ) {
    if (maior > num[i] && segundo < maior || maior == 0) {
        segundo = num[i]
    }
}
console.log(segundo) */

/* let num = [1, 2, 3, 4]
let soma = 0;
let num2 = [];

for(let i=0; i < num.length; i++) {
    soma += num[i]
    num2.push(soma)
}
console.log(num2) */

/* let palavra = "ovo"
let invertida= ""

for(let i=palavra.length -1; i > -1; i--) {
    invertida += palavra[i]
}
console.log(palavra == invertida) */

