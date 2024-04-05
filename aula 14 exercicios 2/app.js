var number = window.document.getElementById('number');
var resultado = window.document.getElementById('resultado');
var select = window.document.getElementById('select-tabuada')


function calcular() {
    var valor = number.value; // Obter o valor digitado no campo de entrada
    


    if(valor.length == 0) {

        window.alert('ERRO - campo não preenchido.');

    } else {
        select.innerHTML =''
        valor = Number(valor); // Converter o valor para um número

        for(let c = 1; c <= 10; c++) {
            let multiplicacao = valor * c;

            let item = document.createElement('option')
            item.text = `${valor} X ${c} = ${multiplicacao}`
            select.appendChild(item)
        }
        
    }
}
