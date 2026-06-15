/* let pessoa = {
    nome: "Igor",
    idade: 22,
    cidade: "Curitiba"
}
pessoa.idade = 23;
for(let i in pessoa) {
    console.log(i, pessoa[i])
} */


/* let carro = {
    marca: "Toyota",
    modelo: "Corolla"
}
carro.ano = 2022;
for(let i in carro){
    console.log(i, carro[i])
} */


/* let usuario = {
    nome: "Ana",
    email: "ana@email.com",
    senha: "123456"
}
delete usuario.senha;
for(let i in usuario){
    console.log(i,usuario[i])
} */


/* let produto = {
    nome: "Mouse",
    preco: 50,
    estoque: 10
}
if(produto.estoque > 0) {
    console.log("Produto disponével")
} else {
    console.log("Produto indisponível")
} */



/* let valor = 0;
let caro = "";
let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 },
    { nome: "Notebook", preco: 3500 }
]
for(let produto of produtos) {
    if(produto.preco > valor) {
        caro = produto.nome
        valor = produto.preco
    } 
}
console.log(`Produto mais caro: ${caro} Valor: ${valor}`) */


/* let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Pedro", nota: 9 }
]
for(let aluno of alunos){
    if(aluno.nome == "João"){
        aluno.nota = 7
    }
    console.log(aluno)
} */


/* total = 0;
let vendas = [
    { produto: "Mouse", quantidade: 2 },
    { produto: "Teclado", quantidade: 3 },
    { produto: "Monitor", quantidade: 1 }
]
for(let venda of vendas) {
    total += venda.quantidade
}
console.log(total) */


let empres = 0;
let disponivel = 0;
let nomes = [];
let livros = [
    { titulo: "Harry Potter", emprestado: false },
    { titulo: "Dom Casmurro", emprestado: true },
    { titulo: "1984", emprestado: false }
]
for(let livro of livros) {
    if(livro.emprestado == true){
        empres++
    } else {
        disponivel++
        nomes.push(livro.titulo)
    }
}
console.log(`No momento tem ${empres} livros emprestados e ${disponivel} livros disponiveis`)
console.log(`Os livros disponiveis são ${nomes}`)