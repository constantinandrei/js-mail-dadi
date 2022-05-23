/* Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?

*/
// due array, uno per l'utente ed uno per il computer



// prendo il numero di tiri che l'utente vuole fare

const numeroTiri = document.getElementById('numero-tiri');
const submitButton = document.getElementById('submit-button');
const diceList = document.getElementById('dice-list');
const results = document.getElementById('risultati')
// un loop for con n interazioni per assegnare ogni volta un numero per computer e per l'utente

submitButton.addEventListener('click', function () {
    diceList.innerHTML = '';

    const dadiUtente = [];
    const dadiComputer = [];

    for (let i = 0; i < numeroTiri.value; i++){
        dadiUtente.push(Math.ceil(Math.random()* 6));
        dadiComputer.push(Math.ceil(Math.random()* 6));
        
    }
    
    let userScore = 0;
    let computerScore = 0;
    let winner;
    
    for (let i = 0; i < numeroTiri.value; i++) {
        if (dadiUtente[i] > dadiComputer[i]){
            userScore += 1;
            diceList.innerHTML += `<li> computer: ${dadiComputer[i]} - <strong>${dadiUtente[i]} utente</strong></li>`
        }
    
        if (dadiComputer[i] > dadiUtente[i]) {
            computerScore += 1;
            diceList.innerHTML += `<li><strong>computer: ${dadiComputer[i]}</strong> - ${dadiUtente[i]} utente</li>`
        } 
        if (dadiUtente[i] === dadiComputer[i]) {
            diceList.innerHTML += `<li>computer: ${dadiComputer[i]} - ${dadiUtente[i]} utente</li>`
        }

        
    }

    if (userScore === computerScore) {
        results.innerHTML = `<h1>Il risultato è pari</h1><p>Punteggio computer: ${computerScore}</p><p>Punteggio Utente: ${userScore}</p>`
    }

    if (userScore > computerScore) {
        results.innerHTML = results.innerHTML = `<h1>Hai vinto!!!</h1><p>Punteggio computer: ${computerScore}</p><p>Punteggio Utente: ${userScore}</p>`
    }

    if (computerScore > userScore) {
        results.innerHTML = results.innerHTML = `<h1>Peccato, hai perso</h1><p>Punteggio computer: ${computerScore}</p><p>Punteggio Utente: ${userScore}</p>`
    }
    

    
    console.log(dadiUtente);
    console.log(dadiComputer);
    console.log(userScore, computerScore)
})

