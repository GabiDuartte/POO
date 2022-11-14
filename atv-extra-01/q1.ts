*/ Primeira forma de erro */

class Conta {
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
    if(this._saldo >= valor){
        this._saldo = this._saldo - valor;
    }
}
}
let conta: Conta = new Conta('2',120);
conta.sacar(500000);

*/Segunda forma de erro */

class Conta {
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
    if(this._saldo >= valor){
        this._saldo = this._saldo - valor;
    }
    else{
        console.log("Saldo Insuficiente");
    }
}
}
let conta: Conta = new Conta(2,120);
conta.sacar(500000);

*/ Terceira forma de erro */

class Conta {
    private _numero: String;
    private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
}
get saldo() {
    return this._saldo;
}
sacar(valor: number): boolena {
    if(this._saldo >= valor){
        this._saldo = this._saldo - valor;
        return true;
    }
    else{
        return false;
    }
}
}
let conta: Conta = new Conta(2,120);
conta.sacar(500000);
