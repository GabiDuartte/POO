import {Quadrado2, Triangulo2} from "./exercicio-09/q8.ts"

let q2: Quadrado2 = new Quadrado2(2);
console.log(q2.area());
console.log(q2.perimetro());
console.log(q2.comparar(5));

let t2: Triangulo2 = new Triangulo2(2,5,8);
console.log(t2.area());
console.log(t2.perimetro());
console.log(t2.comparar(20));
console.log(t2.comparar(19));