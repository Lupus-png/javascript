let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let chute = 6;

if (chute === numeroSecreto) {
    console.log("Acertou!");
} else if (chute > numeroSecreto) {
    console.log("Muito alto!");
} else {
    console.log("Muito baixo!");
}