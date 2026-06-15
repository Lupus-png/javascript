/* const carro = {
    marca: "Ford",
    modelo: "KA",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function() { window.alert("Biiiiiiiiiiih") },
    completo: function() {
        return "A marca é " + this.marca + ", e o modelo é " + this.modelo;
    }
}
/* carro.cor = "Branco"; */  // Adiciona um objeto
/* carro.marca = "BYD"; */  // Modifica a propriedade de um objeto
/* delete carro.ano; */  // Excluir propriedade
/* console.log(carro)
console.log(carro.completo()) */


/* let livro = {   // alterando propriedade
    titulo: "Harry Potter",
    paginas: 300
}

livro.paginas = 350
console.log(livro) */


/* let aluno = {   //adicionando propriedade
    nome: "Ana",
    nota: 8
}
aluno.curso = "ADS"
console.log(aluno) */


/* let produto = {  //deletando propriedade
    nome: "Mouse",
    preco: 100,
    estoque: 20
}
delete produto.estoque
console.log(produto) */


/* let pessoa = {   // Percorrendo com FOR...IN
    nome: "Carlos",
    idade: 25,
    profissao: "Programador"
}

for(let i in pessoa) {
    console.log(i, pessoa[i])
} */


/* let cont = 0 
let filme = {      // percorrendo e contando
    titulo: "Matrix",
    ano: 1999,
    diretor: "Wachowski"
}
filme.genero = "Ficção";

for(let i in filme) {
    cont++
    console.log(i,filme[i])
}
console.log(`O numero de propriedades é de ${cont}`) */


/* let produto = {  //objeto e condição
    nome: "Teclado",
    preco: 150
}
if(produto.preco > 100) {
    console.log("Produto caro")
} else {
    console.log("Produto barato")
}
 */


/* let usuario = {  //mais condições
    nome: "Igor",
    logado: true
}
if(usuario.logado == true) {
    console.log("Bem vindo " + usuario.nome)
} else {
    console.log("Usuario não logado")
} */

/* let somaIdade = 0;
let pessoas = [     // arrays + objeto
    { nome: "Ana", idade: 20 },
    { nome: "João", idade: 25 },
    { nome: "Pedro", idade: 30 }
]

for(let i in pessoas){
    console.log(pessoas[i].nome)
    somaIdade += pessoas[i].idade
}
console.log(`A soma das idades é de ${somaIdade}`) */


/* let alunos = [    //array e objetos, e adicionando objetos no array
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Pedro", nota: 9 }
]
alunos.push({nome: "Maria", nota: 10})

for(let i in alunos) {
    if(alunos[i].nota >= 7) {
        console.log(alunos[i].nome)
    }
} */


/* let total = 0;
let produtos = [  // DESAFIO SUPREMO. Nivel 1 kk
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 }
]
for(let i in produtos){
    console.log(produtos[i])
    if (produtos[i].preco > 100) {
        console.log(`O produto ${produtos[i].nome} tem um valor maior que R$100`)
    }
    total += produtos[i].preco
}
console.log(`O valor total de todos os produtos é de R$${total}`) */


let aprovados = 0;
let media = 0
let maior = 0;
let destaque = "";
let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Pedro", nota: 9 },
    { nome: "Maria", nota: 7 }
]

for(let aluno of alunos) {
    if(aluno.nota > maior) {
        maior = aluno.nota
        destaque = aluno.nome
    }
    media += aluno.nota
    if (aluno.nota >= 7) {
        aprovados++
    }
}

console.log(`O aluno com maior nota foi ${destaque}`)
console.log(`A media de notas dos alunos foi de ${media/ alunos.length}`)
console.log(`A quantidade de alunos aprovados é ${aprovados}`)