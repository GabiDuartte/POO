class sitfinanceira{
    valorCredito: number = 0;
    valorDebito: number = 0;

    saldo(): number{
        return(this.valorCredito - this.valorDebito);
    }
}
let sitfin = new sitfinanceira;
sitfin.valorCredito = 120;
sitfin.valorDebito = 80;

console.log('Saldo: ', sitfin.saldo());