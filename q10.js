const prompt = require('prompt-sync')()

let t, s, d, h, m = 0

function main(){
    t = Number(prompt('Numero em mms: '))

    s = t/1000
    d = t/86400000
    h = t/3600000
    m = t/60000

    console.log('O numero em: ')
    console.log( 'Dias: ', d)
    console.log('Horas, minutos e segundos: ', h, '/', m, '/', s)
}

main()