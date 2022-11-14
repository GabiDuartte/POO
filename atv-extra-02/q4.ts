

class ValorInvalido extends Error{
    constructor(message: string){
        super(message);
    }
}

class Conta{
    private _numero: String;
    private _saldo: number;

    constructor(numero: string, saldoInicial: number){
        this._numero = numero;
        this._saldo = saldoInicial;
    }

    get numero(): String{
        return this._numero;
    }

    get saldo(): number{
        return this._saldo;
    }

    sacar(vlr: number): void{
        if(this._saldo < vlr){
            throw new SaldoInsuficiente('Erro');
        }
        this._saldo = this._saldo - vlr;
    }

    depositar(vlr: number): void{
        if(vlr <= 0){
            throw new ValorInvalido('Erro');
        }
        this._saldo = this._saldo - vlr;
    }

    transferir(ctDesejada: Conta, vlr: number): void{
        this.sacar(vlr);
        ctDesejada.depositar(vlr);
    }
}