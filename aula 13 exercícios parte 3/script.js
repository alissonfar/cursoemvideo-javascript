function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resultado = window.document.getElementById('resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Ano de nascimento inválido.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var genero = ''

        if (fsex[0].checked) {
            var genero = 'Homem'
        } else if (fsex[1].checked) {
            var genero = 'Mulher'
        }

    
    resultado.innerHTML = `Detectado ${genero} com ${idade} anos.`

    }

}
