const input = require('prompt-sync')()

const n = Number(input('Informe um numero: '))

const antecessor = n - 1
const sucessor = n + 1

console.log('Antecessor: ', Math.trunc(antecessor), 'Sucessor: ', Math.trunc(sucessor))