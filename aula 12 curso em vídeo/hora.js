var agora = new Date()
var hora = agora.getHours()

console.log(`As horas nesse momento é ${hora} horas.`)

if (hora <= 12) {
    console.log('O horário agora é AM.')
} else if(hora > 12) {
    console.log('O horário agora é PM.')
}

