const modal = document.querySelector('.modal');
const submitButton = document.querySelector('.modal__button');
const closeButton = document.querySelector('.modal__content--close');
const writePassword = document.querySelector('#generate')
const lengthCriteria = document.querySelector("#length-criteria");
const specialCriteria = document.querySelector("#special-criteria");
const lowerCaseCriteria = document.querySelector("#lower-case-criteria");
const upperCaseCriteria = document.querySelector("#upper-case-criteria");
const numberCriteria = document.querySelector("#number-criteria");


writePassword.addEventListener("click", () => {
 modal.classList.add('visible');
 modal.classList.remove('hidden');
});


submitButton.addEventListener('click', () => {
 modal.classList.add('hidden');
 modal.classList.remove('visible');
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
});


closeButton.addEventListener('click', () => {
 modal.classList.add('hidden');
   modal.classList.remove('visible');
});


function generatePassword() {
 const characterTypeArray = ["s", "l", "u", "n"];
 const randomCharacter = characterTypeArray[Math.floor(Math.random()*characterTypeArray.length)];
 console.log(randomCharacter);


 // const criteria2 = specialCriteria.checked
 // const criteria3 = lowerCaseCriteria.checked
 // const criteria4 = upperCaseCriteria.checked
 // const criteria5 = numberCriteria.checked
 return getArrayLength();
 
}


function getArrayLength() {
 const inputLengthValue = lengthCriteria.value
 if(inputLengthValue >= 8 && inputLengthValue <= 128) {
   console.log(parseInt(inputLengthValue));
   const arrayLength = parseInt(inputLengthValue);
   const passwordArray = [];
     for (let i = 0; i < arrayLength; i++) {
       const number = Math.floor(Math.random() * (9 - 1) + 1)
       passwordArray.push(number);
     }
     console.log(passwordArray)
    
     //passwordArray.forEach(item => console.log(item))
     const wholePassword = passwordArray.join('')
     console.log(wholePassword);
     return wholePassword
 } else {
   return "ERROR! You must enter a number between 8 and 128."
   }
}
