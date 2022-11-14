import {Conta1} from "./atv-extra-01/q4.ts"
class Banco1{
    private _contas: Conta1[] = [];

    inserir(conta: Conta1): void{
        let ctConsultada = this.consultar(conta.numero);

        if(ctConsultada == null){
            this._contas.push(conta);
        }
    }

    consultar(numero: String): Conta1{
        let ctConsultada !: Conta1;
        for(let conta of this._contas){
            if(conta.numero == numero){
                ctConsultada = conta;
                break;
            }
            if(ctConsultada == null){

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
            if(indice == null ){

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
            ctConsultada.depositar(vlr);
        
    }

    sacar(numero: String, vlr: number): void{
        let ctConsultada = this.consultar(numero);
            ctConsultada.sacar(vlr);
       
    }

    transferir(numCredito: String, numDebito: String, vlr: number): void{
        let contaCredito: Conta1 = this.consultar(numCredito);
        let contaDebito: Conta1 = this.consultar(numDebito)

        if(contaCredito != null && contaDebito){
            contaDebito.transferir(contaCredito, vlr);
        }
    }

}

let conta: Conta1 = new Conta1('2',120);
let conta2: Conta1 = new Conta1('1', 20);
let banco1: Banco1 = new Banco1();
banco1.inserir(conta);
banco1.inserir(conta2);
banco1.transferir('1', '2', 15);