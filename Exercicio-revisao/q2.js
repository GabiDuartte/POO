const prompt = require('prompt-sync')();

const real = Number(prompt('Informe um valor em real: '))

const bitcoin = real*118.98664

console.log('O valor em bitcoin será: ', Math.round(bitcoin))