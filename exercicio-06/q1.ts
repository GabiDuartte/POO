class Calculadora{
    private operador1: number;
    private operador2: number;

    somar(): number{
        return this.operador1 + this.operador2;
    }

    subtrair(): number{
        return this.operador1 - this.operador2;
    }

    constructor(operador1: number, operador2: number){
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
}

let vlr: Calculadora = new Calculadora(4,2);
console.log(vlr.somar());
console.log(vlr.subtrair());
/* vlr.operador1 = 6;  -> erro de compilaçao, pois operador é privado */