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
const cutButton = document.getElementById('cut');
const message1 = document.getElementById('error-1');
const message2 = document.getElementById('error-2');

submitButton.addEventListener('click', function () {
    // reset del HTML e della lista
    myUl.innerHTML = '';
    myArray = [];
    lastElements.innerHTML = '';
    message1.classList.add('d-none');
    message2.classList.add('d-none');
    // condizioni per funzionare, numeri più grandi di 0

    if (lunghezzaArray.value < 1){
        message1.classList.remove('d-none');
    } 
    if (spliceLength.value < 1) {
        message2.classList.remove('d-none');
    } 
    
    if (lunghezzaArray.value > 0 && spliceLength.value > 0) { 
        message1.classList.add('d-none');
        message2.classList.add('d-none');
    

    // generatore Array con numeri tra 1 e 100

    for (let i = 0; i < lunghezzaArray.value; i++) {
        myArray.push(Math.ceil(Math.random() * 100))
        // stampo la lista in HTML
        myUl.innerHTML += `<li>${myArray[i]}</li>`
    }

    if (myArray.length > spliceLength.value) {
        for (let i = myArray.length - spliceLength.value; i < myArray.length; i++){
            lastElements.innerHTML += `<li>${myArray[i]}</li>`;
            
        }

        spliceSelect.innerHTML = `Gli ultimi ${spliceLength.value}`;



    } else if (myArray.length < spliceLength.value) {
        for (let i = 0; i < myArray.length; i++){
            lastElements.innerHTML += `<li>${myArray[i]}</li>` 
        }
        spliceSelect.innerHTML = `La lista è troppo corta per selezionare ${spliceLength.value} elementi`
    } else {
        spliceSelect.innerHTML = `Il taglio ha la stessa lunghezza della lista`
    }
    }   

})

cutButton.addEventListener('click', function () {
    // reset HTML
    lastElements.innerHTML = '';

    message1.classList.add('d-none');
    message2.classList.add('d-none');
// condizioni per funzionare, numeri più grandi di 0

if (lunghezzaArray.value < 1){
    message1.classList.remove('d-none');
} 
if (spliceLength.value < 1) {
    message2.classList.remove('d-none');
} 

if (lunghezzaArray.value > 0 && spliceLength.value > 0) { 
    message1.classList.add('d-none');
    message2.classList.add('d-none');

    
    // seleziono gli ulti n elementi

    
    if (myArray.length > spliceLength.value) {
        for (let i = myArray.length - spliceLength.value; i < myArray.length; i++){
            lastElements.innerHTML += `<li>${myArray[i]}</li>`;
            
        }

        spliceSelect.innerHTML = `Gli ultimi ${spliceLength.value}`;



    } else if (myArray.length < spliceLength.value) {
        for (let i = 0; i < myArray.length; i++){
            lastElements.innerHTML += `<li>${myArray[i]}</li>` 
        }
        spliceSelect.innerHTML = `La lista è troppo corta per selezionare ${spliceLength.value} elementi`
    } 
           
    else {
        spliceSelect.innerHTML = `Il taglio ha la stessa lunghezza della lista`
    }
}
})




