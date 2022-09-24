function par(n: number): any{
    if(n % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const numero = par(4);
const vlr = par(5);
console.log(numero, vlr);