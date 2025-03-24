/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNames(names , letters){
    let filteredNames = [];
    for(i=0; i<names.length; i++){
        //controllo se il tutto funziona con un console.log e nel let fuori dalla funzione inizialmente metto solo la condizione names
        console.log(names[i]);
        //propongo un if dove si va a prendere la prima lettera di ogni nome e si confronta con la lettera inserita dall'utente per poi pusharla nell'array vuoto
        if(names[i].charAt(0) === letters){
            filteredNames.push(names[i]);
        }
    }
    //ritorno l'array filtrato
    return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
let arrayFiltrato = filterNames(names , 'A');



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(arrayFiltrato);