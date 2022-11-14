abstract class Funcionario {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): number;
}

interface Autenticavel {
    autentica(login: string, senha: string): boolean;
}


class Gerente extends Funcionario implements Autenticavel {

    login: string = "";
    senha: string = "";

    getBonificacao(): number {
        return (this.salario * 40) / 100;
    }

    autentica(login: string, senha: string): boolean {
        if (this.login == login && this.senha == senha) {
            return true;
        } else {
            return false;
        }
    }

}

class Cliente implements Autenticavel {
    autentica(login: string, senha: string): boolean {
        return false;
    }
    
}

class Diretor extends Funcionario {
    login: string = "";
    senha: string = "";
    

    getBonificacao(): number {
        return (this.salario * 60)/100;
    }

}

class Presidente extends Funcionario{
    getBonificacao(): number{
        return this.salario + 1000;
    }
}