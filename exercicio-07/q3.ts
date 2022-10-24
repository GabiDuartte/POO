
class CalculadoraEletronica extends Calculadora{
    constructor(op1: number, op2: number){
        super(op1, op2);
    }
    get exponenciar(): number{
        return Math.pow(this.op1, this.op2); 
    }
    
}
let n1: CalculadoraEletronica = new CalculadoraEletronica(2,3);
console.log(n1.exponenciar);