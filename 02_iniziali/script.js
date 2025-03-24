/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter(name){
    let iniziali = [];
    for (let i= 0 ; i<name.length; i++){
        iniziali.push(name[i].charAt(0));
    }
    return iniziali;
}
    
// Invoca la funzione qui e stampa il risultato in console
let nomiIniziali = firstLetter(names);
    
    
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
    
console.log(nomiIniziali);

//BONUS
let arrnomi = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const iniziali = (arrnames) =>{
    let letteraPrima = [];
    for (let i= 0 ; i<arrnames.length; i++){
        letteraPrima.push(arrnames[i].charAt(0));
    }
    return letteraPrima;
}
let inizialiNomi = iniziali(arrnomi);
console.log(inizialiNomi);