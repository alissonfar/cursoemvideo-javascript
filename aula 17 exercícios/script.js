var valor_inicial = window.document.getElementById('inicio-number');
var select = window.document.getElementById('resultado-primeiro');
var resultado = window.document.getElementById('resultado');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { 
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    var valor = valor_inicial.value; // Corrigindo aqui
    if(isNumero(valor) && !inLista(valor, valores)) { // Corrigindo aqui
        valores.push(Number(valor));
        let item = document.createElement('option')
        item.text = `Valor ${valor_inicial.value} adicionado.`
        select.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    valor_inicial.value = ''
    valor_inicial.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}. `
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.`
    }
}