var valor_inicial = window.document.getElementById('inicio-number')
var select = window.document.getElementById('resultado-primeiro')
var resultado = window.document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { 
        return true 
    } else {
        return false
    }
}


function adicionar() {
    
    if(isNumero(valor_inicial.value) && !inLista(valor_inicial.value)) {
        valores.push(Number(valor_inicial.value))
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}