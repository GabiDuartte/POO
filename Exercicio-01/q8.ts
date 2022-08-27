class circulo{
    raio: number = 0;

    area(): number{
        return(this.raio * this.raio)*3.14;
    }

    pmt(): number{
        return(this.raio)*2*3.14;
    }
}
let circ = new circulo;
circ.raio = 3;

console.log('Area: ',circ.area());
console.log('Perimetro: ', circ.pmt());
  