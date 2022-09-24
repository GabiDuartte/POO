function pmt(...args: any){
    return args;
}

let seq = (pmt("a","b"));
let seq1 = (pmt("a","b","c"));
let seq2 = (pmt("a","b","c","d"));

console.log(seq, "\n", seq1, "\n", seq2);