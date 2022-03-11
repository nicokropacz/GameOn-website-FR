function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const formSubmit = document.querySelector("#form-submit")

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

formSubmit.addEventListener("click", formvalidate);

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

//close event 

modalCloseBtn.forEach((close) => close.addEventListener("click", closeModal));

// fonction 

function closeModal () {
  modalbg.style.display = "none";
}

function formvalidate() {
  if (checkFirstName() === true &&
      checkLastName() === true &&
      checkEmail() === true &&
      checkBirthdate() === true &&
      checkTournamentsQuantity() === true &&
      checkLocations() === true &&
      checkCheckBox() === true) {
      return true;
  } 
  return false;
}

// Tous champs 

function forAllFieldsValidation() {
  checkFirstName()
  checkLastName()
  checkEmail()
  checkBirthdate()
  checkTournamentsQuantity()
  checkLocations()
  checkCheckBox()
}


 

//******** */

// DOM element validation champs

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Nom check (prénom, nom)

function checkFirstName() {
  if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
      firstName.parentElement.setAttribute('data-error-visible', 'true');
      firstName.style.border = '3px solid red';
      return false;
  }
  first.parentElement.setAttribute('data-error-visible', 'false');
  first.style.border = 'solid green 3px';
  return true;
}

function checkLastName() {
  if (lastName.value.trim().length < 2 || last.value.trim() === "" || !lastName.value.match(regex)) {
      lastName.parentElement.setAttribute('data-error-visible', 'true');
      lastName.style.border = '3px solid red';
      return false;
  }
  last.parentElement.setAttribute('data-error-visible', 'false');
  last.style.border = 'solid green 3px';
  return true;
}

// mail check

function checkEmail() {
  
  if (email.value.trim().match(regexmail)) {
      email.parentElement.setAttribute('data-error-visible', 'false');
      email.style.border = 'solid green 3px';
      return true;
  }
  email.parentElement.setAttribute('data-error-visible', 'true');
  email.style.border = '3px solid red';
  return false;
}

// naissance check

function checkBirthdate() {
  if (birthdate.value.trim().length !== 10) {
      birthdate.parentElement.setAttribute('data-error-visible', 'true');
      birthdate.style.border = '3px solid red';
      return false;
  }
  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  birthdate.style.border = 'solid green 3px';
  return true;
}

// tournois check 

function checkTournamentsQuantity() {
  if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
      quantity.parentElement.setAttribute('data-error-visible', 'true');
      quantity.style.border = '3px solid red';
      return false;
  }
  quantity.parentElement.setAttribute('data-error-visible', 'false');
  quantity.style.border = 'solid green 3px';
  return true;
}

//  check des villes

allLocations.setAttribute('data-error-visible', 'true');

function checkLocations(){
 
  for (let i = 0; i < locations.length; i++) 
  {
      if (locations[i].checked) {
          allLocations.setAttribute('data-error-visible', 'false');
          return true;
      }
  } 
  
  return false;
}

// check des conditions utilsations

function checkCheckBox() {
  if (checkbox1.checked === false) {
      checkbox1.parentElement.setAttribute('data-error-visible', 'true');
      return false;
  }
  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

// evenement champs form

function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');

// envoi champs form

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (formvalidate() == true) {
      displayModalSubmit();
      document.querySelector('form').reset();
  } else {
      forAllFieldsValidation();
  }
});


//**** */

//** submit confirmation */

// DOM éléments envois confirmation

const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// ------ confirmation envoyé ------ //

// envois

function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

// Close

function closeSubmit() {
    modalSubmit[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

// eventlistner closesubmit

closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);

/************** */