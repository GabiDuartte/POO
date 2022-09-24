function verif(nome: string, pronome? : string): string {

    if (pronome) {
         return nome + " " + pronome;
    }
    return "Sr." + nome;
    }
    
    console.log(verif('Sávia'));
    console.log(verif('Sra.', 'Sávia'));