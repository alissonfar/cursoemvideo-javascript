var idade = 66

console.log(`Você tem ${idade} anos de idade.`)

if (idade < 16) {
    console.log('Você é menor de idade, não vota.')
} else if(idade < 18 || idade > 65) {
    console.log('Seu voto é opcional.')
} else {
    console.log('Você é maior de idade e seu voto é obrigatório.')
}