const prompt = require('prompt-sync')();

const n = Number(prompt('Informe um numero entre 1 a 12: '))

let dias = 0

if(n == 1){
    console.log('Janeiro')
    dias = 31
}else if(n == 2){
    console.log('Fevereiro')
    dias = 28
}else if(n == 3){
    console.log('Março')
    dias = 31
}else if(n == 4){
    console.log('Abril')
    dias = 30
}else if(n == 5){
    console.log('Maio')
    dias = 31
}else if(n == 6){
    console.log('Junho')
    dias = 30
}else if(n == 7){
    console.log('Julho')
    dias = 31
}else if(n == 8){
    console.log('Agosto')
    dias = 31
}else if(n == 9){
    console.log('Setembro')
    dias = 30
}else if(n == 10){
    console.log('Outubro')
    dias = 31
}else if(n == 11){
    console.log('Novembro')
    dias = 30
}else if(n == 12){
    console.log('Dezembro')
    dias = 31
}

console.log('Quant. de dias: ', dias)