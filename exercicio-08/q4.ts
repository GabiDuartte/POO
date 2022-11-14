abstract class FiguraGeometrica{
    abstract area(): number;
    abstract perimetro(): number;

}

class Quadrado extends FiguraGeometrica{
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
}

class Triangulo extends FiguraGeometrica{
    lado: number;
    base: number;
    altura: number;

    constructor(lado: number, altura: number, base: number){
        super();
        this.lado = lado;
        this.base = base;
        this.altura = altura;
    }
    area(): number{
        return (this.base*this.altura)/2;
    }
    perimetro(): number{
        return this.lado + this.lado + this.lado;
    }
}

let q: Quadrado = new Quadrado(2);
console.log(q.area());
console.log(q.perimetro());

let t: Triangulo = new Triangulo(3,4,8);
console.log(t.area());
console.log(t.perimetro());

