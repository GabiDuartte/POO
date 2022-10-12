import { Conta } from "./conta";

class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this._contas.push(conta);
        }
	}

	consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarIndice(conta.numero);
		if (indice != -1) {
			this._contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    quantContas(): number {
        return this._contas.length;
    }

    totSaldos(): number {
        let totSaldo: number = 0;
        for (let conta of this._contas) {
            totSaldo += conta.saldo;
        }

        return totSaldo;
    }

    mediaSaldos() {
        return this.totSaldos()/this.quantContas();
    }

}

let b: Banco = new Banco();
b.inserir(new Conta("1", 150));
b.inserir(new Conta("2", 310));
console.log(b.consultar("2").saldo); 
/*console.log(b.consultarIndice); erro de compilaçaõ, pois consultarIndice se tornou privado */

let c2 = new Conta("2", 120);
b.alterar(c2);
console.log(b.consultar("2").saldo); 
b.inserir(new Conta("3", 402));
b.excluir("1");
b.depositar("3", 105);
console.log(b.consultar("3").saldo); 
console.log(b.totSaldos());
console.log(b.mediaSaldos());
console.log(b.quantContas());
