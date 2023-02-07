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
console.log("random Method choice: ",randomCharacter);
getSpecialCharacter();
getLowerCaseCharacter();
// const criteria3 = lowerCaseCriteria.checked
// const criteria4 = upperCaseCriteria.checked
// const criteria5 = numberCriteria.checked
return getArrayLength();
}




function getArrayLength() {
const inputLengthValue = lengthCriteria.value
if(inputLengthValue >= 8 && inputLengthValue <= 128) {
  console.log("length array: ", parseInt(inputLengthValue));
  const arrayLength = parseInt(inputLengthValue);
  const passwordArray = [];
    for (let i = 0; i < arrayLength; i++) {
      const number = Math.floor(Math.random() * (9 - 1) + 1)
      passwordArray.push(number);
    }
    console.log("password array: ",passwordArray)
  
    //passwordArray.forEach(item => console.log(item))
    const wholePassword = passwordArray.join('')
    console.log('join password: ',wholePassword);
    return wholePassword
} else {
  return "ERROR! You must enter a number between 8 and 128."
  }
}
function getSpecialCharacter() {
const specialCharactersArray = [];


for(let specialCharacter = 0; specialCharacter <= 128; specialCharacter++) {
  if(specialCharacter >= 32 && specialCharacter <= 47 ||
    specialCharacter >= 58 && specialCharacter <= 64 ||
    specialCharacter >= 91 && specialCharacter <= 96 ||
    specialCharacter>=123 && specialCharacter<=126) {
    
      specialCharactersArray.push(String.fromCharCode(specialCharacter));
  }
}
console.log(specialCharactersArray);
if(specialCriteria.checked) {
  const randomCharacter = specialCharactersArray[Math.floor(Math.random()* specialCharactersArray.length)];
  console.log("random special character:",randomCharacter);// ya me esta retornando un caracter special solo
}
}


function getLowerCaseCharacter() {
   //97 - 122
   const lowerCaseArray = [];
   for(let i = 0; i <= 128; i++) {
       if(i >= 97 && i <= 122) {
           lowerCaseArray.push(String.fromCharCode(i));
       }
   }
   console.log(lowerCaseArray);
   if(lowerCaseCriteria.checked) {
       const randomCharacter = lowerCaseArray[Math.floor(Math.random()* lowerCaseArray.length)];
       console.log('random lowerCase character:', randomCharacter);
   }
}


