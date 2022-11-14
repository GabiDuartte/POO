abstract class ClasseAbstrata{
    abstract imprimaAlgo(): void
}

class ClasseConcreta extends ClasseAbstrata {
   imprimaAlgo(): void{
    console.log('ola');
   }
}
let c: ClasseConcreta = new ClasseConcreta();
console.log(c.imprimaAlgo());
