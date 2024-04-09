let valores = [1, 2 ,3, 54, 234, 7 ,3453]

valores.sort((a, b) => a - b)

valores.push(143)

valores.sort((a, b) => a - b)

// for(let i = 0; i <= valores.length; i++) {
//     console.log(`Na posição ${i}, o valor é ${valores[i]}`)
// }

for(let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

let pos = valores.indexOf(21312)
console.log(`O número se encontra na posição ${pos}`)