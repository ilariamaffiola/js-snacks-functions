/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
// const d = new Date();
// console.log  (d.getHours());
function saluto(string){
    //dichiaro una variabile che mi dia l'ora attuale
    let d = new Date();
    //controllo se il tutto funziona con un console.log
    console.log(d.getHours());
    //inizialized un if che controlla l'ora e restituisce il saluto corretto
    if(d.getHours() <= 13){
        return 'Buongiorno' + ' ' + string;
    }
    else if(d.getHours() >13 && d.getHours() <= 17){
        return 'Buon Pomeriggio' + ' ' + string;
    }
    else{
        return 'Buonasera' + ' ' + string;
    }

}

// Invoca la funzione qui e stampa il risultato in console
let salutoUtente = saluto(name);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(salutoUtente);