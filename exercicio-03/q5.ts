function soma(x: number, y?: any): number {
    return x + y
    }
    
    console.log(soma(1, 2)); // Resultado: 3 
    console.log(soma(1, "2")); // Resultado: 12
    console.log(soma(1)); // Resultado: NaN