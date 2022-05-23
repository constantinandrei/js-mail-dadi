/* 

Extra Bonus
Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array.

*/


let myArray = [];

const myUl = document.getElementById('my-ul');
const lastElements = document.getElementById('last-elements');
const lunghezzaArray = document.getElementById('array-length');
const spliceLength = document.getElementById('splice-length');
const spliceSelect = document.getElementById('splice-select');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {

    // reset del HTML e della lista
    myUl.innerHTML = '';
    myArray = [];
    lastElements.innerHTML = '';

    // generatore Array con numeri tra 1 e 100

    for (let i = 0; i < lunghezzaArray.value; i++) {
        myArray.push(Math.ceil(Math.random() * 100))
        // stampo la lista in HTML
        myUl.innerHTML += `<li>${myArray[i]}</li>`
    }


    // seleziono gli ulti n elementi
    if (myArray.length > spliceLength.value) {
        for (let i = myArray.length - spliceLength.value; i < myArray.length; i++){
            lastElements.innerHTML += `<li>${myArray[i]}</li>`;
            
        }

        spliceSelect.innerHTML = `Gli ultimi ${spliceLength.value}`;



    } else {
        for (let i = 0; i < myArray.length; i++){
            lastElements.innerHTML += `<li>${myArray[i]}</li>` 
        }
        spliceSelect.innerHTML = `La lista è troppo corta per selezionare ${spliceLength.value} elementi`
    }

    
    
})





