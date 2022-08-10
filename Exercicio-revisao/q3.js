const prompt = require('prompt-sync')();

const n1 = Number(prompt('Informe um numero: '))
const n2 = Number(prompt('Informe outro numero: '))
const n3 = Number(prompt('Informe outro numero: '))

let maior = 0
let menor = 0

if(n1 > n2 && n1 > n3){
    maior = n1
    
} if(n1 < n2 && n1 < n3){
    menor = n1 
}
if(n2 > n1 && n2 > n3){
    maior = n2
} if(n2 < n1 && n2 < n3){
    menor = n2
}
if(n3 > n1 && n3 > n2){
    maior = n3
} if(n3 < n1 && n3 < n2){
    menor = n3
}

console.log('Maior: ', maior, 'Menor: ', menor)