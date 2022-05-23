/* 

Esercizio Bonus: la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.

*/


const myArray = [8, 9, 4, 0, 3, 4, 89, 54, 23, 64, 98, 47, 104, -4, 7];

const myUl = document.getElementById('my-ul');
const lastFive = document.getElementById('last-five');


for (let i = 0; i < myArray.length; i++) {
    myUl.innerHTML += `<li>${myArray[i]}</li>`
}


if (myArray.length >= 5) {
    for (let i = myArray.length - 5; i < myArray.length; i++){
        lastFive.innerHTML += `<li>${myArray[i]}</li>` 
    }
} else {
    for (let i = 0; i < myArray.length; i++){
        lastFive.innerHTML += `<li>${myArray[i]}</li>` 
    }
}