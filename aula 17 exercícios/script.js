
function contar() {
    
    var inicio = window.document.getElementById('inicio-number').value;
    /* inicio = Number(inicio) 
    // comentado pois, se eu declarar nessa linha aqui que a var inicio é um number, o 'length' por padrão vai considerar a ausencia de caractere no campo como 0 (que no caso é um caractere, 
    o próprio 0), ou seja na condição perguntando se no input inicio o length (numero de caracteres) é igual a zero (nenhum caractere, ele vai dar falso pq vai considerar o 0 como um caractere) 
    Por isso, preciso declarar as var como number depois da condição para que o laço de reptição seja efetuado corretamente */
    

    var fim = window.document.getElementById('fim-number').value;
    // fim = Number(fim) 

    var passo = window.document.getElementById('passo-number').value;
    // passo = Number(passo)

    var resultado = window.document.getElementById('resultado')
    
  
    if (inicio.length == 0|| fim.length == 0 || passo.length == 0) {
        window.alert('ERRO - Os campos não podem estar vazios.')
    } else {
        resultado.style.padding = '30px'
        resultado.innerHTML='Contando...'
        
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);
      
    
        
        if (passo <= 0){
            window.alert('Passo inválido! Considerando passo 1 para o programar startar.')
            passo = 1 
        }

        if (inicio < fim) {
            // contagem crescente
            for(var contador = inicio; contador <= fim; contador += passo) {
                resultado.innerHTML += `${contador}\u{1F449} `
            }
        } else {
            // contagem descrescente
            for(var contador = inicio; contador >= fim; contador -= passo) {
                resultado.innerHTML += `${contador}\u{1F449} `
            }
        }

       
    }

// for (inicio ; inicio <= fim ; passo) {
//     resultado.innerHTML = inicio
// }
}