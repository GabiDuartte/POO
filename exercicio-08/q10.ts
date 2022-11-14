class Conta1{
    _nome: String;
    _saldo: number;

    constructor(nome: string, saldo: number){
        this._nome = nome;
        this._saldo = saldo;
    }
    getNome(): String{
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }
    get saldo(): number{
        return this._saldo;
    }
    set saldo(saldo:number){
        this._saldo = saldo;
    }
}

interface Tributavel{
    calcularTributos(): number;
}

class ContaCorrente extends Conta1 implements Tributavel{
    
    calcularTributos(): number{
        return (this._saldo*10)/100;
    }
}

class SegurodeVida extends Conta1 implements Tributavel{
    calcularTributos(): number{
        return 50;
    }
}