const prompt = require('prompt-sync')()

let i = 0

const n1 = Number(prompt('Informe um numero: '))
const n2 = Number(prompt('Informe outro numero: '))


for(i = n1 - 1 ; i > 1; ){
    console.log(Math.trunc(n1))
    break
}
for(i = n1 - 1; i>1;){
    console.log(Math.trunc(n2))
    break
}