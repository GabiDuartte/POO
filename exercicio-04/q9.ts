class Jogador{
    forca: number;
    nivel: number;
    pontos: number;
    constructor(forca: number, nivel: number, pontos: number){
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    calcularAtaque(): number{
        return this.forca*this.nivel
    }
    atacar(atacado: Jogador): boolean{
        if(atacado.estaVivo()){
        atacado.pontos -= this.calcularAtaque();
        return true;
        }
        else{
            return false;
        }
    }
    estaVivo(): boolean{
        if(this.pontos > 0){
            return true;
        }else{
            return false;
        }
    }
}

let jgd: Jogador = new Jogador(5,9,22);
let jgd1: Jogador = new Jogador(2,5,7);
let jgd2: Jogador = new Jogador(1,1,0);

console.log(jgd.calcularAtaque());
console.log(jgd.estaVivo());
console.log(jgd1.calcularAtaque());
console.log(jgd.atacar(jgd1));
console.log(jgd2.estaVivo());
console.log(jgd.atacar(jgd2));