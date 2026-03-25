function verificar() {  
    var data = new Date()   
    var ano = data.getFullYear()   /* Coletando data em anos */

    var nasc = window.document.getElementById('nasctxt')
    var msg = window.document.getElementById('msg')

    if (nasc.value.length == 0 || nasc.value > ano) {  /* Se 0 ou maior que o ano atual, da erro */
        window.alert('[ERRO] Verifique os dados e tenta novamente!')
    } else {
        var img = document.createElement('img')   /* criando tag 'img' */
        img.setAttribute('id', 'foto')    /* criando um id foto na img*/

        var idade = ano - Number(nasc.value)   /* Subtração de data menos nascimento */
        
        var sexo = window.document.getElementsByName('sexo')    /* Selecionando os radios buttons */
        var genero = ''         /* Variavel vazia */
        if (sexo[0].checked) {    /* Se o primeiro botão[0] entao o genero recebe homem */
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 24) {
                img.setAttribute('src', 'imagens/garoto.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                img.setAttribute('src', 'imagens/senhor.jpg')
            }
        } else if (sexo[1].checked) {    /* Senao se segundo botão[1] entao genero recebe mulher */
            genero = 'mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 24) {
                img.setAttribute('src', 'imagens/garota.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                img.setAttribute('src', 'imagens/senhora.jpg')
            }
        }
        
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`    /* mensagem na tela */
        msg.appendChild(img) /* adicionar elemento */
    }
}