import prompt from "prompt-sync";
import { Conta, Banco } from "./banco";

let input = prompt();
let b1: Banco = new Banco();
let opcao: String = '';

do {
console.log('\nDigite uma opção:');
console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
'4 - Depositar 5 - Excluir 6 - Transferir\n' +
'7 – Total_Saldos 8 - Media_Saldos' +
'0 - Sair\n');

opcao = input("Opção:");
switch (opcao) {
case "1":
    inserir();
    break
case "2":
consultar();
break
case "3":
    sacar();
    break
case "4":
    depositar();
    break
case "5":
    excluir();
    break
case "6":
    transferir();
    break;
case "7":
    totSaldos();
    break
case "8":
    mediaSaldos();
    break
case "0":
    break
}
input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta: Conta;
    conta = new Conta(numero, 0);
    b1.inserir(conta);
}

function consultar(): void{
    let numero: string = input('Digite o número da conta:');
    let conta: Conta;
    conta = b1.consultar(numero);
}

function sacar(): void{
    let numero: string = input('Digite o numero da conta');
    let num: number = Number(input('Valor a ser sacado: '));
    b1.sacar(numero, num);
}

function depositar(): void{
    let numero: string = input('Digite o numero da conta');
    let num: number = Number(input('Valor a ser depositado: '));
    b1.depositar(numero, num);
}

function transferir(): void{
    let origem: string = input('conta origem: ');
    let destinatario: string = input('conta destino: ');
    let num: number = Number(input('Valor a ser transferido'))
    b1.transferir(origem, destinatario, num);
}

function excluir(): void{
    let numero: string = input('Digite o numero da conta');
    b1.excluir(numero);
}

function totSaldos(): void{
    let numero: string = input('Digite o numero da conta');
    b1.totSaldos(numero);
}

function mediaSaldos(): void{
    let numero: string = input('Digite o numero da conta');
    b1.mediaSaldos(numero);
}


