class Produto{

    private _id: number;
    private _desc: string;
    private _qtd_estq: number;
    private _vlr_unitario: number;

    constructor(id: number, desc: string, qtd_estq: number, vlr_unitario: number){
        this._id = id; 
        this._desc = desc; 
        this._qtd_estq = qtd_estq; 
        this._vlr_unitario = vlr_unitario;
    }

    get id(): number{
        return this._id;
    }

    get qtd_estq(): number{
        return this._qtd_estq;
    }
    get desc(): string{
        return this._desc;
    }
    get vlr_unitario(): number{
        return this._vlr_unitario;
    }
    repor(n: number): void{
        this._qtd_estq = this._qtd_estq + n;
    }
    baixa(n: number): void{
        this._qtd_estq = this._qtd_estq - n;
    }
}
class ProdutoPerecivel extends Produto{
    dt_validade: number;

    constructor(id: number, desc: string, qtd_estq: number, vlr_unitario: number, dt_validade: number){
        super(id, desc, qtd_estq, vlr_unitario);
        this.dt_validade = dt_validade;
    }
    validade(dt_atual: number): number{
        if(dt_atual - this.dt_validade >= 0){
            return dt_atual;
        }
        return this.dt_validade;
    }
    
}
class Estoque extends Produto{
    private _produto: Produto[] = [];

    inserir(num: Produto): void{
        let produtoConsultado = this.consultar(num.id);

        if(produtoConsultado == null){
            this._produto.push(num);
        }
    }

    consultar(id: number): Produto{
        let produtoConsultado!: Produto;
        for( let num of this._produto){
            if(num.id == id ){
                produtoConsultado = num;
                break;
            }
        }
        return produtoConsultado;
    }
    private consultarIndice(id: number): number{
        let indice: number = -1;
        for(let i: number = 0; i<this._produto.length; i++){
            if(this._produto[i].id == id){
                indice = i;
                break;
            }
        }
        return indice;
    }
    excluir(id: number): void{
        let indice: number = this.consultarIndice(id);

        if(indice != 1){
            for(let i: number = 0; i<this._produto.length; i++){
                this._produto[i] = this._produto[i+1];
            }
            this._produto.pop();
        }
    }

    baixar(id: number, n: number): void{
        let produtoConsultado = this.consultar(id);

        if(produtoConsultado != null){
            produtoConsultado.baixa(n);
        }
    }

    repo(id: number, n: number): void{
        let produtoConsultado = this.consultar(id);

        if(produtoConsultado != null){
            produtoConsultado.repor(n);
        }
    }

    qtdProdutos(): number{
        return this._produto.length;
    }

}