import {Banco1} from "./atv-extra-01/q5.ts"

class Conta1 {
    private _numero: String;
    private _saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
}
get numero(): String{
    return this._numero;
}
get saldo() {
    return this._saldo;
}
sacar(valor: number): void {
    if(this._saldo < 0){
        throw new Error('Saldo Insuficiente');
        }
        this._saldo = this._saldo - valor;
}
depositar(valor: number): void{
    if(this._saldo < 0){
        throw new Error('Saldo Insuficiente');
    }
        this._saldo = this._saldo + valor;
    }

    transferir(ctDesejada: Conta1, valor: number): void{
        this.sacar(valor);
        ctDesejada.depositar(valor);
    }
}

let conta: Conta1 = new Conta1('2', 200);
let c3: Conta1 = new Conta1('1', -340);
let banco1: Banco1 = new Banco1();
banco1.inserir(conta);
banco1.inserir(c3);