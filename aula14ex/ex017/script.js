function tabuada() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {      /* nao pode ser zero ou vazio */
        window.alert('Por favor, digite um numero!')
    } else {
        n = Number(num.value)       /* convertendo em numero */
        tab.innerHTML = ''          /* limpar a tabela */
        
        c = 1
        while (c <= 10) {
            let item = document.createElement('option')   /* criando option a cada looping (para o select) */
            tab.appendChild(item)  /* adicionando o elemento(option) item a tabela */
            item.text = `${n} X ${c} = ${n*c}`
            c++
    }
    }
}