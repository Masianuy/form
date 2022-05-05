'use strict';

const firstName = document.querySelector('#input-firstname');
const lastName = document.querySelector('#input-lastname');
const age = document.querySelector('#input-age');
const email = document.querySelector('#input-email');
const password = document.querySelector('#input-password');
const confirmPassword = document.querySelector('#input-confirmpassword');
const gendersInputs = document.getElementsByName('gender');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');
let gender;

function errorMessage(el) {
    const span = el.nextElementSibling;
    span.classList.add('error');
    return span.textContent = `Error in field ${el.id}`;
}

const regEmail = /^\w+\.?\w+@\w{3,5}\.\w{2,5}$/gi;
const regPassword = /^\w{8,15}$/gi;

function passwordComfirmation(passwordValue, confirmValue) {
    return passwordValue === confirmValue;
}

form.addEventListener('focusout', function(e) {
    e.preventDefault();
    const checkEmail = regEmail.test(e.target.value);
    const checkPassword = regPassword.test(e.target.value);
    const checkConfirmPassword = passwordComfirmation(password.value, e.target.value);

    if(e.target.nextElementSibling.classList.contains('error')) {
        e.target.nextElementSibling.classList.remove('error');
        e.target.nextElementSibling.textContent = '';
    }
    if(e.target === firstName && !e.target.value) {
        errorMessage(firstName);
    }
    if(e.target === lastName && !e.target.value) {
        errorMessage(lastName);
    }
    if(e.target === age && (isNaN(e.target.value) || !e.target.value)) {
        errorMessage(age);
    }
    if(e.target === email && !checkEmail) {
        errorMessage(email);
    }
    if(e.target === password && !checkPassword) {
        errorMessage(password);
    }
    if(e.target === confirmPassword && !checkConfirmPassword) {
        errorMessage(confirmPassword);
    }
})

class Person {
    constructor(fName, lName, personAge, personEmail, personSex) {
        this.fName = fName;
        this.lName = lName;
        this.personAge = personAge;
        this.personEmail = personEmail;
        this.personSex = personSex;
    }
}    

form.addEventListener('click', function(e) {
    e.preventDefault();

    for (let el of gendersInputs) {
        if (e.target === el) {
            el.setAttribute('checked', 'checked');
            gender = e.target.value;
        }
    }

    if (e.target === submitBtn) {
        const newUser = new Person(firstName.value, lastName.value, age.value, email.value, gender);
        localStorage.setItem('newUser', JSON.stringify(newUser));
    }
})