class Hora{
    constructor(private hora: number, private minuto: number, private segundos: number){}

    horas(): string{
        return `${this.hora} horas`;
    }
    minutos(): string{
        return `${this.minuto} minutos`;
    }
    segundo(): string{
        return `${this.segundos} segundos`;
    }
    get formato(): string{
        return `${this.hora}:${this.minuto}:${this.segundos} `;
    }
}
let num = new Hora(2,3,12);
console.log(num.horas());
console.log(num.minutos());
console.log(num.segundo());
console.log(num.formato);