const prompt = require('prompt-sync')()

function main() {

    let seq ,  m 
    let s = 0
    let quant = Number(prompt('quantidade de termos: '))

    for (let i = 0; i < quant; i++) {
        console.log('Valor',i+1,':')
        seq = Number(prompt(''))
        s += seq
       
    }
    m = s/quant

console.log('Soma: ',s)
console.log('Media: ',m)

}
main()