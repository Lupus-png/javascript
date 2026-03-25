function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()    /* Coletando as horas do dia */

    msg.innerHTML = `Agora são ${hora} horas`    /* Exibindo as horas */

    if (hora >= 0 && hora < 12) {     /* Separando por periodos */
        imagem.src = 'Manhã.jpg'
        document.body.style.background = '#a4d9e5'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'Tarde.jpg'
        document.body.style.background = '#ecdbb6'
    } else {
        imagem.src = 'Noite.jpg'
        document.body.style.background = '#001e26'
    }
}