class AplicacaoErro extends Error{
    constructor(message: string){
        super(message);
    }
}

class ContaInexistente extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

class SaldoInsuficiente extends ContaInexistente{
    constructor(message: string){
        super(message);
    }
}