class retangulo{
    base: number = 0;
    altura: number = 0;


perimetro(): number{
    return(this.base + this.altura)*2;
}

}

let ret = new retangulo;
ret.base = 5;
ret.altura = 5;

console.log(ret.perimetro());


