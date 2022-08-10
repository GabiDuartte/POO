const prompt = require('prompt-sync')()

function main(){
    let v = Number(prompt('Informe um valor: '))
    let t = Number(prompt('Informe a taxa de juros %: '))
    var n = 0
    var s = 0
    var tot = 0

while(n < 12){
    
    n++
    s += (v * t)/100 
    tot = s + v
    
console.log(tot)
}
}
main()
