'use strict';

// const passwordInput = document.querySelector('.password-box input');

// const copyIcon = document.querySelector('.copy-icon');

// const rangeInput = document.querySelector('.range-box input');

// const sliderNumber = document.querySelector('.range-box .slider-number');

// const generateBtn = document.querySelector('.generate-button');
// const passwordInput = document.querySelector('.password-box input');

// const copyIcon = document.querySelector('.copy-icon');

// const rangeInput = document.querySelector('.range-box input');

// const sliderNumber = document.querySelector('.range-box .slider-number');

// const generateBtn = document.querySelector('.generate-button');
// const generatePassword = () => {
//   let newPassword = '';

//   for (let i = 0; i < rangeInput.value; i++) {
//     let randdomNumbers = Math.floor(Math.random() * AllCharacters.length);

//     newPassword += AllCharacters[randdomNumbers];
// const passwordInput = document.querySelector('.password-box input');

// const copyIcon = document.querySelector('.copy-icon');

// const rangeInput = document.querySelector('.range-box input');

// const sliderNumber = document.querySelector('.range-box .slider-number');

// const generateBtn = document.querySelector('.generate-button');
// const passwordInput = document.querySelector('.password-box input');

// const copyIcon = document.querySelector('.copy-icon');

// const rangeInput = document.querySelector('.range-box input');

// const sliderNumber = document.querySelector('.range-box .slider-number');

// const generateBtn = document.querySelector('.generate-button');
// const generatePassword = () => {
//   let newPassword = '';

//   for (let i = 0; i < rangeInput.value; i++) {
//     let randdomNumbers = Math.floor(Math.random() * AllCharacters.length);

//     newPassword += AllCharacters[randdomNumbers];

//elemets

const passwordInput = document.querySelector('.password-box input');

const copyIcon = document.querySelector('.copy-icon');

const rangeInput = document.querySelector('.range-box input');

const sliderNumber = document.querySelector('.range-box .slider-number');

const generateBtn = document.querySelector('.generate-button');

// Random Characteristics

let AllCharacters =
  'abcsefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#<>~';

const generatePassword = () => {
  let newPassword = '';

  for (let i = 0; i < rangeInput.value; i++) {
    let randdomNumbers = Math.floor(Math.random() * AllCharacters.length);

    newPassword += AllCharacters[randdomNumbers];
  }
  //replacingNewPassward

  passwordInput.value = newPassword;

  //replacing classes of copicon

  copyIcon.classList.replace('uil-file-check-alt', 'uil-copy');
};

rangeInput.addEventListener('input', () => {
  sliderNumber.innerText = rangeInput.value;

  generatePassword();
});

//copiconFunction

copyIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace('uil-copy', 'uil-file-check-alt');
});

//generate Btn

generatePassword();
generateBtn.addEventListener('click', generatePassword);
