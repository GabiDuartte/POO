abstract class FuncaoGeometrica2{
    abstract area(): number;
    abstract  perimetro(): number;

}

interface Comparavel{
    comparar(vl: number): number;
}

class Quadrado2 extends FuncaoGeometrica2 implements Comparavel{
    lado: number;
     constructor(lado: number){
        super();
        this.lado = lado;
     }
     area(): number{
        return this.lado*this.lado;
     }
     perimetro(): number{
        return this.lado*4;
     }
     comparar(vlr: number): number{
        if(this.lado*this.lado < vlr){
            return -1;
        }
        else if(this.lado*this.lado == vlr){
            return 0;
        }
        else if(this.lado*this.lado > vlr){
            return 1;
        }
        return this.lado;
     }
     
}

class Triangulo2 extends FuncaoGeometrica2 implements Comparavel{
    base: number;
    altura: number;
    lado: number;

    constructor(lado: number, base: number, altura: number){
        super();
        this.base = base;
        this.altura = altura;
     }
     area(): number{
        return (this.base*this.altura)/2;
     }
     perimetro(): number{
        return this.lado + this.lado + this.lado;
     }
     comparar(vlr: number): number{
        if((this.base*this.altura)/2 < vlr){
            return -1;
        }
        if((this.base*this.altura)/2 == vlr){
            return 0;
        }
        if((this.base*this.altura)/2 > vlr){
            return 1;
        }
        return this.base;
     }
}
