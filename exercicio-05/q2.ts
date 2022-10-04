//a.
class Postagem{
    id: number;
    texto: string;
    quantCurtidas: number;
    constructor(id: number, texto: string, quantCurtidas: number){
        this.id = id;
        this.texto = texto;
        this.quantCurtidas = quantCurtidas;
    }
    curtir(): number{
        return this.quantCurtidas++;
    }
    toString(): string{
        return ` id: ${this.id}, texto: ${this.texto}, quantCurtidas: ${this.quantCurtidas}`;
    }
}
let pessoa: Postagem = new Postagem(1, "Ola", 7);
console.log(pessoa.curtir());
console.log(pessoa.toString());

//b.

class Microblog{
    postagens: Postagem[] = [pessoa];

    consultar(id: number): Postagem{
        let post!: Postagem;
        for(let p of this.postagens){
            if(p.id == id){
                post = p;
                break;
            }
        }
        return post;
    }
    consultarIndice(id: number): number {
     let indice: number = -1;
    for (let i: number = 0; i < this.postagens.length; i++) {
        if (this.postagens[i].id == id) {
            indice = i;
        break;
        }
    }
    return indice;
}

    excluir(id: number): void{
        let indice: number = this.consultarIndice(id);
        if(indice != -1){
            for(let i: number = indice; i < this.postagens.length; i++){
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    }
}

let u1: Microblog = new Microblog();
console.log(u1.consultar(1));
console.log(u1.excluir(1));