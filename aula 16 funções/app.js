

// function parimpar(n) {
//     if (n % 2 == 0) {
//         return 'Par'
//     } else {
//         return 'Ímpar'
//     }
// }

// console.log(parimpar(284723894723))


// function soma(n1, n2) {
//     return n1+n2
// }

// console.log(soma(1, 2))

// function fatorial(n) {
//     let fat = 1
//     for(let c = n; c > 1; c--) {
//         fat *= c
//     }

//     return fat
// }




function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))