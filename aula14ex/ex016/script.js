function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    var n1 = Number(inicio.value)   /* Convertendo e mumeros */
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)
    var c = ''     /* contador */

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {         /* Evitar de deixar 0 nas opções */
        res.innerHTML = 'Impossivel Contar!'  
    } else {
        res.innerHTML = 'Contando: '   /* Texto antes da contagem */
    }
    if (n3 <= 0) {
        window.alert('Passo invalido! Considerando PASSO 1')
        n3 = 1
    }

    if (n1 < n2) {
        for (c = n1; c <= n2; c += n3) {       /* Caso seja crescente */
            res.innerHTML += (`${c} \u{1F449} `)
        }
    } else {
        for (c = n1; c >= n2; c -= n3) {      /* Caso seja decrescente */
            res.innerHTML += (`${c} \u{1F449}`)
        }
    }

    res.innerHTML += '\u{1F3C1}'   /* emoji bandeira */
}