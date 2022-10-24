class Calculadora{
    private _op1: number;
    private _op2: number;

    constructor(op1: number, op2: number){
        this._op1 = op1;
        this._op2 = op2;
    }

    get op1(): number{
        return this._op1;
    }
    get op2(): number{
        return this._op2;
    }
    get soma(): number{
        return (this.op1 + this.op2);
    }
}
let c1: Calculadora = new Calculadora(2, 3);
console.log(c1.soma);