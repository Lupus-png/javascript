function adicionar() {
    var numero = window.document.getElementById('numero')
    var tabela = window.document.getElementById('lista')
    num = Number(numero.value)
    
    if (numero.value.length == 0 || num > 100 || num < 1 || lista.includes(num) == true) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        lista.push(num)
        let item = document.createElement('option')
        tabela.appendChild(item)
        item.text = `Valor ${num} adicionado`
        res.innerHTML = ''
        numero.value = ''
        numero.focus()
    }
}
lista = []

function resultados() {
    let res = window.document.getElementById('res')
    let todo = 0
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    let media = 0

    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {

        for (let c = 0; c < lista.length; c++) {
            todo += 1
            soma += lista[c]
            if (lista[c] > maior) {
                maior = lista[c]
            } else if (lista[c] < menor) {
                menor = lista[c]
            }
        }
        media = soma / lista.length
        res.innerHTML = `<p> Ao todo, temos ${todo} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
}