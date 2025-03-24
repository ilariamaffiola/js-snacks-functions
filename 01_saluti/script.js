/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto(Name){
    return 'Ciao' + ' '+ Name;
}

// Invoca la funzione qui e stampa il risultato in console
let salutoUtente = saluto(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(salutoUtente);



//BONUS
const secondName = 'Ilaria';
const salutare = (nome) => 'Ciao' + ' ' + nome;
console.log(salutare(secondName));