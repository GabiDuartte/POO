const prompt = require('prompt-sync')()

function main(){
    let str = prompt('Informe uma frase: ')
    
    newstr = (str.replace(/(à|é|í|ó|ú)/gi, '(a|e|i|o|u)'))

    console.log(newstr)

}
main()

