


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora > 0 && hora <=12) {
        img.src = 'images/manha circular.png'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora < 18){
        img.src = 'images/tarde circular.png'
        window.document.body.style.background = '#b9846f'
    } else {
        img.src = 'images/noite circular.png'
        document.body.style.background = '#515154'
    }
}
