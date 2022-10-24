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
        this._saldo = this._saldo - vlr;
    }

    depositar(vlr: number): void{
        this._saldo = this._saldo - vlr;
    }

    transferir(ctDesejada: Conta, vlr: number): void{
        this.sacar(vlr);
        ctDesejada.depositar(vlr);
    }
}

class Poupanca extends Conta{
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number){
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    public renderJuros(): void{
        this.depositar(this.saldo * this._taxaJuros/100);
    }

    get taxaJuros(): number{
        return this._taxaJuros;
    }
}

class ContaImposto extends Conta {
    private _taxaDesconto: number;
    constructor(numero: string, saldo: number, taxaDesconto: number){
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }

    debitar(valor: number): void {
    let total = valor + valor * (this._taxaDesconto/100)
    super.sacar(total);
}
}

class Banco{
    private _contas: Conta[] = [];
    private _poup: Poupanca[] = [];

    inserir(conta: Conta): void{
        let ctConsultada = this.consultar(conta.numero);

        if(ctConsultada == null){
            this._contas.push(conta);
        }
    }

    consultar(numero: String): Conta{
        let ctConsultada !: Conta;
        for(let conta of this._contas){
            if(conta.numero == numero){
                ctConsultada = conta;
                break;
            }
        }
        return ctConsultada;
    }

    consultaIndice(numero: String): number{
        let indice: number = -1;
        for(let i: number = 0; i<this._contas.length; i++){
            if(this._contas[i].numero == numero){
                indice = i;
                break;
            }
        }
        return indice;
    }

    excluir(numero: String): void{
        let indice: number = this.consultaIndice(numero);
        
        if(indice != 1){
            for(let i: number = 0; i>this._contas.length; i++){
                this._contas[i] = this._contas[i+1];
            }
            this._contas.pop();
        }
    }

    depositar(numero: String, vlr: number): void{
        let ctConsultada = this.consultar(numero);

        if(ctConsultada != null){
            ctConsultada.depositar(vlr);
        }
    }

    sacar(numero: String, vlr: number): void{
        let ctConsultada = this.consultar(numero);

        if(ctConsultada != null){
            ctConsultada.sacar(vlr);
        }
    }

    transferir(numCredito: String, numDebito: String, vlr: number): void{
        let contaCredito: Conta = this.consultar(numCredito);
        let contaDebito: Conta = this.consultar(numDebito)

        if(contaCredito != null && contaDebito){
            contaDebito.transferir(contaCredito, vlr);
        }
    }
    
    renderJuros(numero: String): void{
        let conta: Conta = this.consultar(numero);

        if(conta instanceof Poupanca){
            conta.renderJuros();
        }
    }
}