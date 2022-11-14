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

}

let conta: Conta1 = new Conta1('2',120);
conta.sacar(500);
conta.sacar(20);