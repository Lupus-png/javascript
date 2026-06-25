//forEach -- percorre uma array
const vetor = [1, 2, 3 ,4 ,5];

vetor.forEach(function(numero) {
    console.log(numero);
});


const letras = ["A", "B", "C", "D", "E"];

letras.forEach(function(letra, indice) {  //o primeiro sendo o elemento(valor), e o segundo sendo o indice(posição)
    console.log(`${indice}: ${letra}`);
})


const tarefas = [
    {
        id: 1,
        texto: "Estudar",
        completo: false
    },
    {
        id: 2,
        texto: "Trabalhar",
        completo: false
    },
    {
        id: 3,
        texto: "Limpar a casa",
        completo: true
    }
]

tarefas.forEach(function(tarefa, indice, minhasTarefas) { //elemento, indice, proprio vetor(tarefas)
    console.log(`${indice + 1}: ${tarefa.texto}`);
    console.log(minhasTarefas)
})


//map -- percorrer os elementos de um vetor e transformar eles da forma que a gente definir
const vetorTextoTarefas = tarefas.map(function(tarefa) { //é criado uma nova var, usando o map para coletar do array "tarefas", apenas o texto da array, e armazenando na var.
    return tarefa.texto;
});

console.log(vetorTextoTarefas);

//filter -- cria um novo array contendo apenas os elementos que passam em uma condição.
const tarefa1 = tarefas.filter(function(tarefa) {
    return tarefa.id === 1;
});

console.log(tarefa1);


//reduce -- pega um array e reduz todos os elementos a um unico valor 
const vetor = [1, 2, 3, 4];
const valorIncial = 0 //valor inicial do "acumulador"

const soma = vetor.reduce(function(acumulador, elementoAtual) { //elementoAtual é o primeiro valor do array
    return acumulador + elementoAtual;
}, valorIncial)

/* passo a passo
valorIncial = 0 === acumulador = 0

[1, 2, 3, 4]
0 + 1 = 1 // 1 + 2 = 3 // 3 + 3 = 6 // 6 + 4 = 10
acumulador = 10
soma recebe acumulador
*/