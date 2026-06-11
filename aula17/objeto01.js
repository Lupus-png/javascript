let amigo = {nome: 'Jose', 
    sexo: 'M', 
    peso: 85.4, 
    engordar(p=0){  /* Função de engordar */
        console.log('Engordou')
        this.peso += p
}}

amigo.engordar(2) /* Chamando a função */
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)