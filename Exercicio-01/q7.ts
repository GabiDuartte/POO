class retangulo{
    base: number = 0;
    altura: number = 0;


perimetro(): number{
    return(this.base + this.altura)*2;
}

}

let ret = new retangulo;
ret.base = 10;
ret.altura = 10;

console.log(ret.perimetro());


