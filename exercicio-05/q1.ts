class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

let p : Pessoa = new Pessoa("pessoa");
let p1: Pessoa = new Pessoa("gabi");
let p2: Pessoa = new Pessoa("duarte");
let p3: Pessoa = new Pessoa(" ");


class Conta {
    numero: string;
    saldo: number;
    cliente: Pessoa;

    constructor(numero: string, saldo: number, cliente: Pessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    get nomeCliente() {
        return this.cliente.nome;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero && 
                this.cliente.nome == conta.cliente.nome);
    }
}

class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {
        this.contas.push(conta);
    }
    alterar(conta: Conta): void {
        let indice = this.consultarIndice(conta.numero);

        if(indice != -1){
            this.contas[indice] = conta;
        }
    }
    excluir(numero: string): void{
        let indice: number = this.consultarIndice(numero);

        if(indice != -1){
            for(let i: number = indice; i < this.contas.length; i++){
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    consultar(numero: string): Conta {
        let contaProcurada!: Conta;
        for(let c of this.contas){
            if(c.numero == numero){
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero: string): number{
        let indice: number = -1;
        for(let i: number = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i;
                break;
            }
        }
        return indice;
    }

    sacar(numero: string, valor: number): void {
        let saldo: number = this.consultarIndice(numero);

        if(saldo != -1){
        for(let i: number = saldo; i < this.contas.length; i++){
            this.contas[i] = this.contas[i - valor];
        }
        
        }
    }
    depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);

        if(conta != null){
            conta.depositar(valor);
        }
    }
    totdep(): any{
        return this.depositar("1", 100);
    }
    
    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let corg: Conta = this.consultar(numeroOrigem);
        let cdtn: Conta = this.consultar(numeroDestino);

        cdtn.transferencia(cdtn, valor);
    }
    quantConta(){
        return this.contas.length;
    }
    
    media(){
        let m: number = this.totdep() / this.quantConta();
        return m;
    }
}

let b: Banco = new Banco();
b.inserir(new Conta("1", 120, p));
b.inserir(new Conta("2", 260,p1 ));
console.log(b.consultar("2").saldo); 
console.log(b.consultarIndice("1")); 

let c2 = new Conta("2", 320, p2);
b.alterar(c2);
console.log(b.consultar("2").saldo); 
b.inserir(new Conta("3", 300, p3));
b.excluir("1");
console.log(b.consultarIndice("3")); 
b.depositar("3", 105);
console.log(b.consultar("3").saldo); 
console.log(b.quantConta());