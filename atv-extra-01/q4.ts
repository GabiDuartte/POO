class Conta1 {
    private _numero: String;
    private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
}
get saldo() {
    return this._saldo;
}
sacar(valor: number): void {
    if(this._saldo < valor){
        throw new Error('Saldo Insuficiente');
        }
        this._saldo = this._saldo - valor;
}
depositar(valor: number): void{
        this._saldo = this._saldo - valor;
    }

    transferir(ctDesejada: Conta1, valor: number): void{
        this.sacar(valor);
        ctDesejada.depositar(valor);
    }
}

let conta: Conta1 = new Conta1('2',120);
let conta2: Conta1 = new Conta1('1', 20);
conta.transferir(conta2,150);
console.log(conta.saldo);