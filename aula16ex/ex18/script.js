let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []   /* Lista vazia */

function isNumero(n) { /* Verificando se é numero e dando condições */
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { /* Verificando se existe ou nao na lista */
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {  /* Chamando as funções */
        valores.push(Number(num.value))                 /* Adicionando valor na lista valores */
        let item = document.createElement('option')     /* Criando option */
        item.text = `Valor ${num.value} adicionado`     /* Mostrando na tela */
        lista.appendChild(item)                         /* Adicionando o option na lista */
        res.innerHTML = ''                              /* Sempre que adicionar um item, ele limpa a pesquisa */
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''          /* Apaga sozinho a caixa de numero no final da função */
    num.focus()             /* Da foco a caixa de numero no final da função */
}

function finalizar() {
    if (valores.lenth == 0) {
        window.alert('Adicionar valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}