const prompt = require('prompt-sync')()

function main() {
    let tam = Number(prompt('Tamanho do vetor:')), vetor = []
    for (let i = 0; i < tam; i++) {
        vetor[i] = Number(prompt(`elemento ${i}: `))

        vetor.sort((a,b) => {
            if (a > b) return 1;
            if(a < b) return -1;
            return 0
        })
        console.log('Ordem crescente: ', vetor)

        vetor.sort((a,b) => {
            if(a > b) return -1;
            if(a < b) return 1;
            return 0
        })
        console.log('Ordem Decrescente: ', vetor)
    }
    
 
}
main()