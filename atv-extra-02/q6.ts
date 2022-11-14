import {Conta, Poupanca} from "./atv-extra-02/conta.ts";

class PoupancaInvalida extends Error{
    constructor (message: string){
        super(message);
    }
}

class Banco{
    private _contas: Conta[] = [];

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
        throw new ContaInexistente('Erro');
    }

    consultaIndice(numero: String): number{
        let indice: number = -1;
        for(let i: number = 0; i<this._contas.length; i++){
            if(this._contas[i].numero == numero){
                indice = i;
                break;
            }
        
        }
        throw new ContaInexistente('Erro');
        
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
            ctConsultada.depositar(vlr);
        
    }

    sacar(numero: String, vlr: number): void{
        let ctConsultada = this.consultar(numero);
            ctConsultada.sacar(vlr);
       
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
        else{
            throw new ContaInexistente('Erro');
        }
    }

}