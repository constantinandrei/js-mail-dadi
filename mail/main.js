const validEmails = ['andrei@gmail.com', 'pippo97@yahoo.it', 'pluto_73@msn.live', 'silvio.b@gmail.com', 'mattia.tutor@boolean.com', 'domenico.tutor@boolean.com'];
const loginForm = document.getElementById('login-form');
const welcome = document.getElementById('welcome-div');
const userEmail = document.getElementById('inputEmail');
const emailError = document.getElementById('emailError');
const submitButton = document.getElementById('submit-button');

let isEmailValid = -1; 

submitButton.addEventListener('click', function () {

    for (let i = 0; i < validEmails.length; i++) {
        if (validEmails[i] === userEmail.value) {
            isEmailValid = i;
        };
    }

    if (isEmailValid >= 0) {
        loginForm.classList.add('d-none');
        welcome.innerHTML = `Benvenuto sul nosto sito ${userEmail.value}`;
        welcome.classList.remove('d-none');
    } else {
        emailError.classList.remove('d-none');
    }

})


    