/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVocali(string){
    //metto una variabile che mi conta le vocali
    let vocali = 0;
    //inizializzo un ciclo for per scorrere la stringa
    for (let i=0; i<string.length; i++){
        //controllo se il tutto funziona con un console.log
        console.log(string[i]);
        //metto un if che controlla se la lettera è una vocale e se si incrementa la variabile vocali
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
            vocali= vocali + 1;
        }
    }
    //ritorno il numero di vocali
    return vocali;

}

// Invoca la funzione qui e stampa il risultato in console

let vocali = countVocali(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vocali);