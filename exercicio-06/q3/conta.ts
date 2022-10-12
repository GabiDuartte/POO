class Conta {
	
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	get numero(): String {
		return this._numero;
        
	}

	get saldo(): number {
		return this._saldo;
	}
	
	
	sacar(valor: number): void {
		this._saldo = this._saldo - valor;
	}

	depositar(valor: number): void {
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}

