class Equipamento{
    ligado: boolean;
    constructor(ligado: boolean){
        this.ligado = ligado;
    }
    liga(): boolean{
        return this.ligado == true;
    }
    desliga(){
        return this.ligado == false;
    }
    inverte(){
        if(this.ligado == true){
            return false;
        }else{
            return true;
        }
    }
    estaLigado(){
        return this.ligado;
    }
}
let equip: Equipamento = new Equipamento(true);
console.log(equip.liga());
console.log(equip.desliga());
console.log(equip.inverte());
console.log(equip.estaLigado());

let eqp: Equipamento = new Equipamento(false);
console.log(eqp.liga());
console.log(eqp.desliga());
console.log(eqp.inverte());
console.log(eqp.estaLigado());