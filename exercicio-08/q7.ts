abstract class FuncaoGeometrica1{
    

}
interface calculo{
        area(): number;
        perimetro(): number;
    }

class Quadrado1 extends FuncaoGeometrica1 implements calculo{
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

class Triangulo1 extends FuncaoGeometrica1 implements calculo{
   lado: number;
   base: number;
   altura: number;

    constructor(lado: number, base: number, altura: number){
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

let q1: Quadrado1 = new Quadrado1(2);
console.log(q1.area());
console.log(q1.perimetro());

let t1: Triangulo1 = new Triangulo1(2,5,8);
console.log(t1.area());
console.log(t1.perimetro());